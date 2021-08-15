import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
  },
}));

const menuItems = [
  {
    label: 'Sign in with Spotify',
    href: '/sign-in',
  },
];

export default function MenuButtons(): JSX.Element {
  const classes = useStyles();

  const getMenuButtons = (): JSX.Element[] => {
    return menuItems.map(({ label, href }) => {
      return (
        // eslint-disable-next-line no-alert
        <Button {...{ color: 'inherit', className: classes.menuButton }} onClick={() => alert(href)}>
          {label}
        </Button>
      );
    });
  };

  return <div>{getMenuButtons()}</div>;
}
