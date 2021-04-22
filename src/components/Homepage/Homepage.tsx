import React from 'react';
import FluidContainer from '../common/FluidContainer';
import { Box, Circle, Heading, Stack, Text } from '@chakra-ui/react';

function Homepage(): JSX.Element {
  return (
    <FluidContainer mt={{ base: 4, md: 12 }} flex="1 0 auto">
      <Stack spacing={1}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Box d="flex" alignItems="baseline">
            <Circle size="40px" bg="green.300" color="white">
              <Text fontSize={17}>1</Text>
            </Circle>
            <Stack ml={3} spacing={5}>
              <Heading fontSize="xl">You login to SpotifyRandomizer through your Spotify account</Heading>
              <Text width={800}>
                You will be asked to allow SpotifyRandomizer certain permissions on your account. These are for: reading
                your profile data, reading your playlists (public and private), modifying your playlists (in order to
                reorder songs).
              </Text>
            </Stack>
          </Box>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Box d="flex" alignItems="baseline">
            <Circle size="40px" bg="green.300" color="white">
              <Text fontSize={17}>2</Text>
            </Circle>
            <Stack ml={3} spacing={5}>
              <Heading fontSize="xl">SpotifyRandomizer shows list of your playlists (public & private)</Heading>
              <Text width={800}>Along with playlist image & added songs count.</Text>
            </Stack>
          </Box>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Box d="flex" alignItems="baseline">
            <Circle size="40px" bg="green.300" color="white">
              <Text fontSize={17}>3</Text>
            </Circle>
            <Stack ml={3} spacing={5}>
              <Heading fontSize="xl">You choose one of your playlists and click "Randomize"</Heading>
            </Stack>
          </Box>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Box d="flex" alignItems="baseline">
            <Circle size="40px" bg="green.300" color="white">
              <Text fontSize={17}>4</Text>
            </Circle>
            <Stack ml={3} spacing={5}>
              <Heading fontSize="xl">SpotifyRandomizer reorganizes songs in your playlist in random order</Heading>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </FluidContainer>
  );
}

export default Homepage;
