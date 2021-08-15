import React from 'react';
import { Button } from '@material-ui/core';
import { BACKEND_LOGIN_URL } from '../../common/constant';

export default function LoginButton(props: { buttonClass: string }): JSX.Element {
  const { buttonClass } = props;
  const redirectToAuth = () => window.location.replace(BACKEND_LOGIN_URL);

  return (
    <Button {...{ color: 'inherit', className: buttonClass }} onClick={redirectToAuth}>
      Sign in with Spotify
    </Button>
  );
}
