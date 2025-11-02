import { Badge, Box, Heading, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import Section from '../components/Section.jsx';

const MotionBox = motion(Box);

const experiences = [
  {
    company: 'Aarvath Mobitech Pvt Ltd',
  location: 'Mangaluru, Karnataka',
  role: 'Web Developer Intern',
  period: 'Oct 2023 – Jul 2024',
    highlights: [
      'Developed a responsive MERN stack web app that increased user engagement by 30%, reduced load times by 40%, and improved mobile responsiveness by 50%, resulting in a 25% increase in returning users.',
  'Integrated RESTful APIs and Node.js backend; deployed the site on a custom domain via Hostinger, reducing deployment time by 60%.',
      'Engineered IoT dashboard support for a solar-powered vehicle, enabling real-time telemetry with 95% data accuracy.',
      'Participated in Agile sprints and bi-weekly demos, contributing to a 20% faster development cycle and sharpening collaboration and product delivery skills.',
    ],
  },
];

const ExperienceSection = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    description="Hands-on experience in full-stack development, IoT integration, and building scalable web applications that deliver measurable impact."
  >
    <Stack spacing={8}>
      {experiences.map((item) => (
        <MotionBox
          key={`${item.company}-${item.period}`}
          bg="rgba(17, 17, 17, 0.85)"
          borderRadius="2xl"
          border="1px solid"
          borderColor="whiteAlpha.200"
          p={{ base: 6, md: 8 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Stack spacing={4}>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
              align={{ base: 'flex-start', md: 'center' }}
            >
              <Stack spacing={1}>
                <Heading size="md">{item.company}</Heading>
                <Text fontSize="sm" color="whiteAlpha.600">
                  {item.location}
                </Text>
              </Stack>
              <Stack spacing={1} align={{ base: 'flex-start', md: 'flex-end' }}>
                <Badge colorScheme="cyan" px={3} py={1} borderRadius="full">
                  {item.role}
                </Badge>
                <Text fontSize="sm" color="whiteAlpha.600">
                  {item.period}
                </Text>
              </Stack>
            </Stack>
            <List spacing={3} color="whiteAlpha.800">
              {item.highlights.map((highlight) => (
                <ListItem key={highlight} display="flex" alignItems="flex-start" gap={3}>
                  <ListIcon as={FiCheckCircle} color="brand.300" mt={1} />
                  <Text>{highlight}</Text>
                </ListItem>
              ))}
            </List>
          </Stack>
        </MotionBox>
      ))}
    </Stack>
  </Section>
);

export default ExperienceSection;
