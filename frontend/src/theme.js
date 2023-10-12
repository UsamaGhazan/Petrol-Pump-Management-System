import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#ff9e24',
      60: '#000066',
    },
    button: {
      50: '#ff9e24',
      60: '#000066',
    },
  },
  fonts: {
    lato: `'Lato', sans-serif`,
    robo: `'Roboto', sans-serif`,
  },
});

export default theme;
