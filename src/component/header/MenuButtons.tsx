import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginButton from '../authentication/LoginButton';

const useStyles = makeStyles(() => ({
  menuButton: {
    fontWeight: 400,
    size: '18px',
  },
}));

export default function MenuButtons(): JSX.Element {
  const { menuButton } = useStyles();

  return (
    <div>
      <LoginButton buttonClass={menuButton} />
    </div>
  );
}
