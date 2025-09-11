import { createSystem, defaultConfig } from '@chakra-ui/react';

const theme = createSystem(defaultConfig, {
  colorMode: {
    initial: 'light',
    useSystemColorMode: true,
  },
});

export default theme;
