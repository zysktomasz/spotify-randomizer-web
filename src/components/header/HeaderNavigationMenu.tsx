import React from 'react';
import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hooks';
import { isValidJwt } from '../../common/jwtValidator';
import { Link } from 'react-router-dom';
import Routes from '../../common/routes';

function HeaderNavigationMenu(): JSX.Element {
  const userStateJwt = useAppSelector((state) => state.user.jwt);

  const isLoggedIn: boolean = isValidJwt(userStateJwt);
  return (
    <Box>
      <HStack spacing={5}>
        <Link to={{ pathname: Routes.HOME }}>
          <Heading size="md" mr={5}>
            SpotifyRandomizer
          </Heading>
        </Link>
        <Link to={{ pathname: Routes.HOME }}>
          <Text>Home</Text>
        </Link>
        {isLoggedIn && (
          <Link to={{ pathname: Routes.PLAYLISTS }}>
            <Text>My Spotify Playlists</Text>
          </Link>
        )}
      </HStack>
    </Box>
  );
}

export default HeaderNavigationMenu;
