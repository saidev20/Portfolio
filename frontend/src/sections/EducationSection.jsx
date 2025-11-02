import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Section from '../components/Section.jsx';

const education = [
  {
    institution: 'Sahyadri College of Engineering & Management, Mangalore',
    program: 'B.E. in Computer Science Engineering (Artificial Intelligence and Machine Learning)',
    location: 'Mangaluru, Karnataka',
    period: 'Dec 2022 – Present',
    details: '(8.61 CGPA up to 6th semester)'
  },
  {
    institution: 'Gopalaswamy PU College',
    program: 'PU – Science (PCMC)',
    location: 'Mysore, Karnataka',
    period: 'Apr 2020 – Apr 2022'
  }
];

const EducationSection = () => (
  <Section
    id="education"
    eyebrow="Education"
    title="Academic journey"
    description="Grounded in computer science fundamentals with a focus on AI, machine learning, and automation-driven systems design."
  >
    <Stack spacing={6}>
      {education.map((item) => (
        <Box
          key={`${item.institution}-${item.period}`}
          bg="rgba(17, 17, 17, 0.85)"
          borderRadius="xl"
          border="1px solid"
          borderColor="whiteAlpha.200"
          p={{ base: 6, md: 8 }}
        >
          <Stack spacing={2}>
            <Heading size="md">{item.institution}</Heading>
            <Text fontWeight="600" color="brand.300">
              {item.program}
            </Text>
            <Text color="whiteAlpha.700">{item.location}</Text>
            <Text color="whiteAlpha.600">{item.period}</Text>
            {item.details && (
              <Text color="whiteAlpha.600">{item.details}</Text>
            )}
          </Stack>
        </Box>
      ))}
    </Stack>
  </Section>
);

export default EducationSection;
