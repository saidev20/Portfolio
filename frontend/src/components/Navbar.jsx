import { useMemo } from 'react';
import { Box, Flex, HStack, IconButton, Link, useDisclosure, VStack, Divider, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const items = useMemo(
    () =>
      navItems.map((item) => (
        <Link
          key={item.href}
          as={RouterLink}
          to={{ pathname: '/', hash: item.href }}
          px={4}
          py={2}
          fontWeight="600"
          _hover={{ color: 'brand.300' }}
          onClick={onClose}
        >
          {item.label}
        </Link>
      )),
    [onClose]
  );

  return (
    <Box as="header" position="fixed" top={0} w="100%" zIndex={100} bg="rgba(15, 15, 15, 0.8)" backdropFilter="blur(10px)" boxShadow="0 10px 30px rgba(0, 0, 0, 0.3)">
      <Flex h="80px" alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto" px={{ base: 6, md: 10 }}>
        <Link as={RouterLink} to={{ pathname: '/', hash: '#home' }} fontWeight="bold" fontSize="xl" letterSpacing="0.08em" onClick={onClose}>
          SAIDEV MAKANUR
        </Link>
        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          {items}
        </HStack>
        <HStack display={{ base: 'flex', md: 'none' }} spacing={2}>
          <IconButton aria-label="Open menu" icon={isOpen ? <FiX /> : <FiMenu />} variant="ghost" onClick={isOpen ? onClose : onOpen} />
        </HStack>
      </Flex>
      {isOpen && (
        <Box display={{ md: 'none' }} px={6} pb={6}>
          <VStack align="stretch" spacing={4} bg="rgba(17, 17, 17, 0.95)" borderRadius="lg" p={6} boxShadow="base">
            {items}
            <Divider borderColor="whiteAlpha.200" />
            <Button as={RouterLink} to={{ pathname: '/', hash: '#contact' }} onClick={onClose} colorScheme="cyan" variant="solid">
              Contact
            </Button>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
