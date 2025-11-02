import { Badge, Box, Button, Flex, Heading, HStack, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const ProjectCard = ({ project }) => (
  <MotionBox
    bg="rgba(17, 17, 17, 0.85)"
    borderRadius="2xl"
    border="1px solid"
    borderColor="whiteAlpha.200"
    p={8}
    whileHover={{ y: -8, borderColor: 'brand.400', boxShadow: '0 20px 40px rgba(0, 188, 212, 0.2)' }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
  >
    <Flex direction="column" gap={6} h="full">
      <Stack spacing={3}>
        <Badge colorScheme="cyan" w="fit-content" px={3} py={1} borderRadius="full">
          {project.role}
        </Badge>
        <Heading size="lg">{project.title}</Heading>
        <Text color="whiteAlpha.700">{project.description}</Text>
      </Stack>
      <Stack spacing={3}>
        <Text fontWeight="600" color="whiteAlpha.800">
          Tech Stack
        </Text>
        <HStack spacing={2} flexWrap="wrap">
          {project.tech.map((item) => (
            <Badge key={item} colorScheme="cyan" variant="subtle" px={3} py={1} borderRadius="md">
              {item}
            </Badge>
          ))}
        </HStack>
      </Stack>
      <Text color="whiteAlpha.600">{project.features}</Text>
      <HStack spacing={4} mt="auto">
        {project.github && (
          <Button as={Link} href={project.github} isExternal leftIcon={<Icon as={FiGithub} />} variant="outline">
            GitHub
          </Button>
        )}
        <Button
          as={RouterLink}
          to={`/projects/${project.slug}`}
          leftIcon={<Icon as={FiExternalLink} />}
        >
          Learn More
        </Button>
      </HStack>
    </Flex>
  </MotionBox>
);

export default ProjectCard;
