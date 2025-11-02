import { Box } from '@chakra-ui/react';

const BackgroundGradient = () => (
  <>
    <Box
      position="fixed"
      inset={0}
      zIndex={-2}
      bgGradient="radial(brand.500 1px, transparent 1px)"
      backgroundSize="40px 40px"
      opacity={0.2}
    />
    <Box
      position="fixed"
      inset={0}
      zIndex={-3}
      bgGradient="linear(to-r, rgba(0, 188, 212, 0.15), rgba(15, 15, 15, 0.9))"
    />
  </>
);

export default BackgroundGradient;
