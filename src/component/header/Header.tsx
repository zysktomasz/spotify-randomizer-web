import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import MenuButtons from './MenuButtons';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
  appbarHeader: {
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Header(): JSX.Element {
  const classes = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Logo />
        <MenuButtons />
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={classes.appbarHeader}>{displayDesktop()}</AppBar>
    </header>
  );
}
