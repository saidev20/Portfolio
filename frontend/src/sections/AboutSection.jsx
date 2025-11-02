import { Box, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react';
import Section from '../components/Section.jsx';

const AboutSection = () => (
  <Section
    id="about"
    eyebrow="About Me"
  title="Engineering intelligent automation with measurable impact"
  description="Computer Science (AIML) undergraduate blending AI, operating systems, and automation to deliver resilient, context-aware user experiences."
  >
    <Grid
      templateColumns={{ base: '1fr', md: '3fr 2fr' }}
      gap={{ base: 10, md: 16 }}
      alignItems="center"
    >
      <GridItem>
        <Stack spacing={4} fontSize="lg" color="whiteAlpha.800">
          <Text>
            I’m <strong>Saidev</strong>, currently pursuing a B.E. in Computer Science (AIML) at Sahyadri College of Engineering &amp; Management. My academic journey (8.61 CGPA up to 6th semester) is anchored in building intelligent systems that merge AI reasoning with practical automation.
          </Text>
          <Text>
            Beyond coursework, I lead the development of <strong>SIGMA OS</strong>, an AI-first operating system integrating contextual automation, multimodal agents, and OS-native intelligence. The project is progressing through patent filing while we prepare a supporting research publication.
          </Text>
          <Text>
            I’ve also architected solutions such as <strong>Diabify</strong>—an ML-powered diabetic meal planner—and a deployed web platform for <strong>Aarvath Mobitech Pvt Ltd</strong>, which secured ₹5L seed funding from Cisco in 2024.
          </Text>
        </Stack>
      </GridItem>
      <GridItem>
        <Box
          borderRadius="3xl"
          overflow="hidden"
          boxShadow="0 30px 80px rgba(0, 188, 212, 0.18)"
          border="1px solid"
          borderColor="whiteAlpha.200"
          bg="black"
          maxW={{ base: '320px', md: '420px' }}
          mx="auto"
        >
          <Image
            src="/Saidev_Tshirt_Photo.jpg"
            alt="Saidev Makanur portrait"
            objectFit="cover"
            objectPosition="center top"
            w="100%"
            h={{ base: '340px', md: '460px' }}
          />
        </Box>
      </GridItem>
    </Grid>
  </Section>
);

export default AboutSection;
