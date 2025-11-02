import { Box, Button, Heading, Icon, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';
import { FiArrowLeft, FiCheckCircle, FiGithub } from 'react-icons/fi';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects.js';

const MotionBox = motion(Box);

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <MotionBox
        maxW="800px"
        mx="auto"
        px={{ base: 6, md: 10 }}
        pt="120px"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Stack spacing={6} align="flex-start">
          <Heading size="2xl">Project not found</Heading>
          <Text color="whiteAlpha.700">The project you are looking for might be renamed or unpublished.</Text>
          <Button leftIcon={<Icon as={FiArrowLeft} />} onClick={() => navigate('/')}>Return Home</Button>
        </Stack>
      </MotionBox>
    );
  }

  return (
    <MotionBox
      maxW="960px"
      mx="auto"
      px={{ base: 6, md: 10 }}
      pt="120px"
      pb={{ base: 20, md: 24 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Stack spacing={10}>
        <Stack spacing={4}>
          <Button as={RouterLink} to="/" leftIcon={<Icon as={FiArrowLeft} />} variant="ghost" color="brand.300" w="fit-content">
            Back to overview
          </Button>
          <Heading size="3xl">{project.title}</Heading>
          <Text fontSize="lg" color="whiteAlpha.700">
            {project.overview}
          </Text>
        </Stack>
        <Stack spacing={6}>
          <Box>
            <Heading size="md" mb={3}>
              Role
            </Heading>
            <Text color="whiteAlpha.700">{project.role}</Text>
          </Box>
          <Box>
            <Heading size="md" mb={3}>
              Key Highlights
            </Heading>
            <List spacing={3} color="whiteAlpha.800">
              {project.highlights.map((item) => (
                <ListItem key={item} display="flex" alignItems="flex-start" gap={3}>
                  <ListIcon as={FiCheckCircle} color="brand.300" mt={1} />
                  <Text>{item}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Heading size="md" mb={3}>
              Tech Stack
            </Heading>
            <Text color="whiteAlpha.700">{project.tech.join(' • ')}</Text>
          </Box>
        </Stack>
        <Box>
          <Button as="a" href={project.github} target="_blank" rel="noreferrer" leftIcon={<Icon as={FiGithub} />}>
            View on GitHub
          </Button>
        </Box>
      </Stack>
    </MotionBox>
  );
};

export default ProjectPage;
