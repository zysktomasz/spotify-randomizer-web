import React from 'react';
import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import FluidContainer from '../common/FluidContainer';
import { BACKEND_LOGIN_URL } from '../../common/constants';

function Header(): JSX.Element {
  const redirectToAuth = () => window.location.replace(BACKEND_LOGIN_URL);

  return (
    <Box as="header" bg="gray.700" color="white">
      <FluidContainer py={5}>
        <Flex justify="space-between" alignItems="center">
          <Box>
            <Heading size="md">SpotifyRandomizer</Heading>
          </Box>
          <Spacer />
          <Box>
            <Button colorScheme="teal" onClick={redirectToAuth}>
              Sign In with Spotify
            </Button>
          </Box>
        </Flex>
      </FluidContainer>
    </Box>
  );
}

export default Header;
