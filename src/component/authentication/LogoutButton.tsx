import React from 'react';
import { Button } from '@material-ui/core';

export default function LogoutButton(): JSX.Element {
  return (
    <Button {...{ color: 'inherit', className: 'menuButton' }} onClick={() => alert('sign out todo')}>
      Sign out
    </Button>
  );
}
