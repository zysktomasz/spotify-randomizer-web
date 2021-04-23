import { extendTheme } from '@chakra-ui/react';

const extendedTheme = extendTheme({
  styles: {
    global: {
      'html, body, #root': { height: '100%' },
    },
  },
});

export default extendedTheme;
