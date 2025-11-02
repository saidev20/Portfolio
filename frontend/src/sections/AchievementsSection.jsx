import { List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';
import { FiAward } from 'react-icons/fi';
import Section from '../components/Section.jsx';

const achievements = [
  '2nd place in Department-level Major Project Exhibition at TechVision 2025.',
  '2nd place in College-level Major Project Expo at TechVision 2025.',
  'Winner of the Mini Project Expo 2024.',
  'Secured 5L seed funding by Cisco for Aarvath Mobitech Pvt Ltd in 2024.',
  'Winners of the IEEE event at Vivekananda College of Engineering, Puttur, for the Solar Powered Vehicles project in 2024.',
  'Winner of the CSS Action event in Devhost, organized by the college in 2024.'
];

const AchievementsSection = () => (
  <Section
    id="achievements"
    eyebrow="Achievements"
    title="Recognitions & milestones"
    description="Highlights from hackathons, showcases, and innovation programs where impactful engineering met tangible outcomes."
  >
    <Stack spacing={6}>
      <List spacing={4} fontSize="lg" color="whiteAlpha.800" pl={0} styleType="none">
        {achievements.map((item) => (
          <ListItem key={item} display="flex" alignItems="flex-start" gap={3}>
            <ListIcon as={FiAward} color="brand.300" mt={1} />
            <Text>{item}</Text>
          </ListItem>
        ))}
      </List>
    </Stack>
  </Section>
);

export default AchievementsSection;
