import React from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { BACKEND_LOGIN_URL } from '../../common/constants';
import { useAppSelector } from '../../redux/hooks';
import { UserState } from '../../redux/userSlice';
import { isValidJwt } from '../../common/jwtValidator';

function HeaderUserPanel(): JSX.Element {
  const userState: UserState = useAppSelector((state) => state.user);

  const redirectToAuth = () => window.location.replace(BACKEND_LOGIN_URL);

  const { userDetails, jwt } = userState;
  const isLoggedIn: boolean = isValidJwt(jwt);
  return (
    <Box>
      {isLoggedIn && (
        <HStack>
          <h1>Hello, {userDetails.displayName}</h1>
          <Button colorScheme="teal" onClick={() => alert('sign out todo')}>
            Sign Out
          </Button>
        </HStack>
      )}
      {!isLoggedIn && (
        <Button colorScheme="teal" onClick={redirectToAuth}>
          Sign In with Spotify
        </Button>
      )}
    </Box>
  );
}

export default HeaderUserPanel;
