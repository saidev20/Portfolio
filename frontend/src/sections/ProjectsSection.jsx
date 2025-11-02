import { SimpleGrid } from '@chakra-ui/react';
import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.js';

const ProjectsSection = () => (
  <Section
    id="projects"
    eyebrow="Projects"
    title="Architecting intelligent platforms"
    description="A selection of systems where contextual AI, automation, and OS engineering converge."
  >
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </SimpleGrid>
  </Section>
);

export default ProjectsSection;
