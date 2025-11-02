import { useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack
} from '@chakra-ui/react';

const initialState = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '') : '';
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({ type: 'success', message: 'Thanks for reaching out! I will get back to you shortly.' });
      setFormData(initialState);
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isEmailValid = /.+@.+\..+/.test(formData.email);

  return (
    <VStack as="form" spacing={5} onSubmit={handleSubmit} align="stretch">
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" size="lg" />
      </FormControl>
      <FormControl isRequired isInvalid={formData.email.length > 0 && !isEmailValid}>
        <FormLabel>Email</FormLabel>
        <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" size="lg" />
        <FormErrorMessage>Enter a valid email address.</FormErrorMessage>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or idea."
          rows={5}
          size="lg"
        />
      </FormControl>
      <Button type="submit" size="lg" isLoading={isSubmitting} loadingText="Sending">
        Send Message
      </Button>
      {status && (
        <Alert status={status.type} borderRadius="md">
          <AlertIcon />
          <AlertTitle>{status.type === 'success' ? 'Message sent' : 'Oops'}</AlertTitle>
          <AlertDescription>{status.message}</AlertDescription>
        </Alert>
      )}
    </VStack>
  );
};

export default ContactForm;
