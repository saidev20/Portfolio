import { Stack } from '@chakra-ui/react';
import HeroSection from '../sections/HeroSection.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import ExperienceSection from '../sections/ExperienceSection.jsx';
import AchievementsSection from '../sections/AchievementsSection.jsx';
import ProjectsSection from '../sections/ProjectsSection.jsx';
import SkillsSection from '../sections/SkillsSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';

const HomePage = () => (
  <Stack spacing={{ base: 20, md: 28 }} as="main" pt="80px">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <AchievementsSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </Stack>
);

export default HomePage;
