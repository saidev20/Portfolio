# Saidev Portfolio Backend

Express server providing the contact email API for the portfolio frontend.

## Available Scripts

- `npm run dev` – Start the server in watch mode with nodemon.
- `npm start` – Start the server in production mode.

## Environment Variables

Copy `.env.example` to `.env` and provide valid SMTP credentials.

```bash
MAIL_TO=saidevmakanur2004@gmail.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=api@example.com
SMTP_PASS=replace-me
```

## API Endpoints

- `POST /api/contact` – Accepts `{ name, email, message }` and relays via email using Nodemailer.
- `GET /api/health` – Health probe for deployment platforms.

## Deployment Notes

- Configure allowed origins via `CORS_ORIGINS` (comma-separated list) using your deployed frontend URL, e.g. `https://portfolio.your-domain.com`.
- Render or Railway recommended for deployment.
