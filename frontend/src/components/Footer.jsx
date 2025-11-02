import { Box, Flex, HStack, Icon, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => (
  <Box as="footer" py={10} bg="rgba(17, 17, 17, 0.9)" borderTop="1px solid" borderColor="whiteAlpha.200" mt={20}>
    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={4}>
      <Text fontSize="sm" color="whiteAlpha.700">
        © {new Date().getFullYear()} Saidev Makanur — All rights reserved.
      </Text>
      <HStack spacing={5}>
        
        <Link href="https://github.com/saidev20" isExternal aria-label="GitHub">
          <Icon as={FaGithub} boxSize={5} _hover={{ color: 'brand.300' }} />
        </Link>
        <Link href="https://linkedin.com/in/saidev-makanur-56421026a" isExternal aria-label="LinkedIn">
          <Icon as={FaLinkedin} boxSize={5} _hover={{ color: 'brand.300' }} />
        </Link>
        <Link href="mailto:saidevmakanur2004@gmail.com" aria-label="Email">
          <Text fontWeight="600" color="brand.300">
            saidevmakanur2004@gmail.com
          </Text>
        </Link>
      </HStack>
    </Flex>
  </Box>
);

export default Footer;
