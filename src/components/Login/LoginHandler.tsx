import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isValidJwt } from '../../common/jwtValidator';

function LoginHandler(): JSX.Element {
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const jwt = query.get('jwt');
    if (jwt) {
      console.log('jwt:', jwt);

      console.log(isValidJwt(jwt) ? 'jwt valid' : 'jwt not valid');
      // todo: validate, decode and update store with jwt data
    }
  });

  // todo: render spinner
  return <h1>huehue</h1>;
}

export default LoginHandler;
