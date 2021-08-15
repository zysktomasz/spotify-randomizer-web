import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { clearUserData } from '../../redux/userSlice';

export default function LogoutButton(): JSX.Element {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(clearUserData());
    history.push('/');
  };

  return (
    <Button {...{ color: 'inherit', className: 'menuButton' }} onClick={signOut}>
      Sign out
    </Button>
  );
}
