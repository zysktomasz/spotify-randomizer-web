import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { clearUserData } from '../../redux/userSlice';
import Routes from '../../common/route';

export default function LogoutButton(): JSX.Element {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(clearUserData());
    history.push(Routes.HOME);
  };

  return (
    <Button {...{ color: 'inherit', className: 'menuButton' }} onClick={signOut}>
      Sign out
    </Button>
  );
}
