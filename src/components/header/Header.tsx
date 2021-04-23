import React from 'react';
import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import FluidContainer from '../common/FluidContainer';

function Header(): JSX.Element {
  return (
    <Box as="header" bg="gray.700" color="white">
      <FluidContainer py={5}>
        <Flex justify="space-between" alignItems="center">
          <Box>
            <Heading size="md">SpotifyRandomizer</Heading>
          </Box>
          <Spacer />
          <Box>
            <Button colorScheme="teal" onClick={() => alert('clicked')}>
              Sign In with Spotify
            </Button>
          </Box>
        </Flex>
      </FluidContainer>
    </Box>
  );
}

export default Header;
