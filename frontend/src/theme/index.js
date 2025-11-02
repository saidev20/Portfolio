import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#f7fafc', '#0f0f0f')(props),
      color: mode('#1a202c', '#f7fafc')(props),
      fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      scrollBehavior: 'smooth'
    }
  })
};

const colors = {
  brand: {
    50: '#e0f7fa',
    100: '#b2ebf2',
    200: '#80deea',
    300: '#4dd0e1',
    400: '#26c6da',
    500: '#00bcd4',
    600: '#00a5bb',
    700: '#008297',
    800: '#006273',
    900: '#00414f'
  }
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: '600'
    },
    variants: {
      solid: (props) => ({
        bg: mode('brand.500', 'brand.400')(props),
        color: mode('#0f0f0f', '#0f0f0f')(props),
        _hover: {
          bg: mode('brand.600', 'brand.300')(props),
          transform: 'translateY(-2px)'
        }
      }),
      outline: (props) => ({
        borderColor: 'brand.400',
        color: 'brand.400',
        _hover: {
          bg: mode('brand.50', 'brand.900')(props),
          borderColor: 'brand.300'
        }
      })
    }
  }
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const theme = extendTheme({ config, styles, colors, components });

export default theme;
