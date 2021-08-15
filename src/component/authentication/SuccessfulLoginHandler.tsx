import React, { useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { getUserDataFromJwt, isValidJwt } from '../../common/jwtValidator';
import { AuthenticatedUserPayload, setUserData } from '../../redux/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Routes from '../../common/route';

function SuccessfulLoginHandler(): JSX.Element {
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
          jwt,
        };

        dispatch(setUserData(payload));
      }

      // todo: do something when unable to get user data from jwt
    }
  });

  return isValidJwt(userStateJwt) ? <Redirect to={{ pathname: Routes.HOME }} /> : <p>spinner here</p>;
}

export default SuccessfulLoginHandler;
