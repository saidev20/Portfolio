import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Section = ({ id, eyebrow, title, description, children }) => (
  <MotionBox
    id={id}
    maxW="1200px"
    mx="auto"
    px={{ base: 6, md: 10 }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <Stack spacing={6} align="flex-start">
      {eyebrow && (
        <Text textTransform="uppercase" letterSpacing="0.3em" color="brand.300" fontSize="sm" fontWeight="bold">
          {eyebrow}
        </Text>
      )}
      {title && (
        <Heading size="2xl" lineHeight="1.1" color="whiteAlpha.900">
          {title}
        </Heading>
      )}
      {description && (
        <Text fontSize="lg" color="whiteAlpha.800" maxW="3xl">
          {description}
        </Text>
      )}
      <Box w="full">{children}</Box>
    </Stack>
  </MotionBox>
);

export default Section;
