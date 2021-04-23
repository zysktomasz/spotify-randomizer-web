import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

function FluidContainer(props: BoxProps): JSX.Element {
  return (
    <Box
      width="full"
      maxWidth="1280px"
      mx="auto"
      px={{
        base: 2,
        md: 6,
      }}
      {...props}
    />
  );
}

export default FluidContainer;
