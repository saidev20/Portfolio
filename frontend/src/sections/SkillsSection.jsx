import { SimpleGrid } from '@chakra-ui/react';
import Section from '../components/Section.jsx';
import SkillCategory from '../components/SkillCategory.jsx';
import skillCategories from '../data/skills.js';

const SkillsSection = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title="Systems thinking across the stack"
    description="Accelerating AI-native products through operating system design, automation, and model orchestration."
  >
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
      {skillCategories.map((category) => (
        <SkillCategory key={category.title} title={category.title} items={category.items} />
      ))}
    </SimpleGrid>
  </Section>
);

export default SkillsSection;
