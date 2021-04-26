import { Center, Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { getUserDataFromJwt, isValidJwt } from '../../common/jwtValidator';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AuthenticatedUserPayload, setUserData } from '../../redux/userSlice';
import Routes from '../../common/routes';

function LoginHandler(): JSX.Element {
  const dispatch = useAppDispatch();
  const userStateJwt = useAppSelector((state) => state.user.jwt);
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const jwt = query.get('jwt');
    if (jwt && isValidJwt(jwt)) {
      const userData = getUserDataFromJwt(jwt);
      if (userData) {
        const payload: AuthenticatedUserPayload = {
          userDetails: userData,
          jwt: jwt,
        };

        dispatch(setUserData(payload));
      }

      // todo: do something when unable to get user data from jwt
    }
  });

  return isValidJwt(userStateJwt) ? (
    <Redirect to={{ pathname: Routes.HOME }} />
  ) : (
    <Center>
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
    </Center>
  );
}

export default LoginHandler;
