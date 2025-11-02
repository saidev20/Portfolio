import { Box, Heading, HStack, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Section from '../components/Section.jsx';
import ContactForm from '../components/ContactForm.jsx';

const ContactSection = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    title="Let's build the future of intelligent systems"
    description="Have a project idea, research collaboration, or product opportunity? I'm always excited to discuss AI-native operating systems and automation."
  >
    <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 10, lg: 16 }} align="stretch">
      <Box flex="1" bg="rgba(17, 17, 17, 0.8)" borderRadius="2xl" border="1px solid" borderColor="whiteAlpha.200" p={8}>
        <ContactForm />
      </Box>
      <Stack flex="1" spacing={6}>
        <Heading size="md">Connect</Heading>
        <Stack spacing={4} fontSize="lg" color="whiteAlpha.800">
          <Text>
            Always open to connecting, collaborating, or discussing new ideas. Let’s build something meaningful together.          </Text>
        </Stack>
        <Stack spacing={3}>
          <HStack spacing={3}>
            <Icon as={FaEnvelope} color="brand.300" />
            <Link href="mailto:saidevmakanur2004@gmail.com">saidevmakanur2004@gmail.com</Link>
          </HStack>
          <HStack spacing={3}>
            <Icon as={FaGithub} color="brand.300" />
            <Link href="https://github.com/saidev20" isExternal>
              Github
            </Link>
          </HStack>
          <HStack spacing={3}>
            <Icon as={FaLinkedin} color="brand.300" />
            <Link href="https://linkedin.com/in/saidev-makanur-56421026a" isExternal>
              LinkedIn
            </Link>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  </Section>
);

export default ContactSection;
