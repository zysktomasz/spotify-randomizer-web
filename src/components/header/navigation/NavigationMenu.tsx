import React from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { useAppSelector } from '../../../redux/hooks';
import { isValidJwt } from '../../../common/jwtValidator';
import { Link } from 'react-router-dom';
import Routes from '../../../common/routes';
import NavigationLinkElement from './NavigationLinkElement';

function NavigationMenu(): JSX.Element {
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
        <NavigationLinkElement name="Home" path={Routes.HOME} />
        {isLoggedIn && <NavigationLinkElement name="My Spotify Playlists" path={Routes.PLAYLISTS} />}
      </HStack>
    </Box>
  );
}

export default NavigationMenu;
