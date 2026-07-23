import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const allowedOrigins = process.env.CORS_ORIGINS?.split(',').map((origin) => origin.trim()) || ['https://your-frontend-domain.com'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['POST', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get('/', (req, res) => {
  res.send('✅ Saidev Portfolio Backend is running successfully.');
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const recipients = process.env.MAIL_TO?.split(',').map((address) => address.trim()).filter(Boolean);

  if (!process.env.RESEND_API_KEY || !recipients || recipients.length === 0) {
    console.error('Email configuration missing.');
    return res.status(500).json({ error: 'Email service not configured.' });
  }

  const mailOptions = {
    from: process.env.MAIL_FROM || 'Saidev Portfolio <onboarding@resend.dev>',
    to: recipients,
    reply_to: email,
    subject: `New portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New message from Saidev's portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `
  };

  try {
    const { error } = await resend.emails.send(mailOptions);

    if (error) {
      throw new Error(error.message);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to send contact email:', error);
    res.status(500).json({ error: 'Unable to send message at this time.' });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio backend listening on port ${PORT}`);
});
