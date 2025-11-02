import { useEffect, useState } from 'react';
import { Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const roles = [
  'AI Systems Engineer & OS Architect',
  'Full Stack Developer',
  'Software Developer',
  'ML Engineer'
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <MotionBox
      id="home"
      maxW="1200px"
      mx="auto"
      px={{ base: 6, md: 10 }}
      minH="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Stack spacing={6} align="flex-start">
        <Text fontSize="lg" letterSpacing="0.3em" color="brand.300">
          TECHNOLOGY • INTELLIGENCE • AUTOMATION
        </Text>
        <Heading size="4xl" lineHeight="1.1" color="whiteAlpha.900">
          Hi, I'm Saidev Makanur<Text as="span" color="brand.400">👋</Text>
        </Heading>
        <Box h={{ base: 'auto', md: '48px' }} overflow="hidden">
          <AnimatePresence mode="wait">
            <MotionHeading
              key={roles[roleIndex]}
              size="lg"
              color="whiteAlpha.800"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -28 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {roles[roleIndex]}
            </MotionHeading>
          </AnimatePresence>
        </Box>
        <Text fontSize="xl" maxW="720px" color="whiteAlpha.800">
          Computer Science student specializing in AI, machine learning, and automation. I’m currently building an intelligent automation platform that is moving through patent filing and research publication.
        </Text>
        <Text fontSize="lg" maxW="640px" color="whiteAlpha.700">
          I focus on intelligent systems, data-driven innovation, and end-to-end product engineering—turning complex ideas into high-impact, real-world solutions.
        </Text>
        <HStack spacing={4} pt={2}>
          <Button as={RouterLink} to={{ pathname: '/', hash: '#projects' }} size="lg">
            View Projects
          </Button>
          <Button as={RouterLink} to={{ pathname: '/', hash: '#contact' }} variant="outline" size="lg">
            Contact Me
          </Button>
        </HStack>
      </Stack>
    </MotionBox>
  );
};

export default HeroSection;
