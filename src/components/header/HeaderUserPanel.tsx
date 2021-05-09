import React from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { BACKEND_LOGIN_URL } from '../../common/constants';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clearUserData, UserState } from '../../redux/userSlice';
import { isValidJwt } from '../../common/jwtValidator';
import { useHistory } from 'react-router-dom';
import Routes from '../../common/routes';

function HeaderUserPanel(): JSX.Element {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const userState: UserState = useAppSelector((state) => state.user);

  const redirectToAuth = () => window.location.replace(BACKEND_LOGIN_URL);
  const signOut = () => {
    dispatch(clearUserData());
    history.push(Routes.HOME);
  };

  const { userDetails, jwt } = userState;
  const isLoggedIn: boolean = isValidJwt(jwt);
  return (
    <Box>
      {isLoggedIn && (
        <HStack>
          <h1>Hello {userDetails.displayName}</h1>
          <Button colorScheme="teal" onClick={signOut}>
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
