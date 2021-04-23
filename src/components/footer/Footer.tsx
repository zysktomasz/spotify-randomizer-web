import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import FluidContainer from '../common/FluidContainer';
import Copyright from './Copyright';
import SocialMediaLinks from './SocialMediaLinks';

function Footer(): JSX.Element {
  return (
    <Box as="footer" bg="gray.50" flexShrink={0}>
      <FluidContainer py={5}>
        <Stack direction={'row'} spacing={4} align={'center'} justify={'space-between'}>
          <Copyright />
          <SocialMediaLinks />
        </Stack>
      </FluidContainer>
    </Box>
  );
}

export default Footer;
