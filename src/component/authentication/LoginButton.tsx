import React from 'react';
import { Button } from '@material-ui/core';
import { BACKEND_LOGIN_URL } from '../../common/constant';

export default function LoginButton(): JSX.Element {
  const redirectToAuth = () => window.location.replace(BACKEND_LOGIN_URL);

  return (
    <Button {...{ color: 'inherit', className: 'menuButton' }} onClick={redirectToAuth}>
      Sign in with Spotify
    </Button>
  );
}
