import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Box, Toolbar } from '@material-ui/core';
import Logo from './Logo';
import HeaderUserPanel from './HeaderUserPanel';
import HeaderNavigationMenu from './HeaderNavigationMenu';

const useStyles = makeStyles((theme) => ({
  appbarHeader: {
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
  },
}));

export default function Header(): JSX.Element {
  const classes = useStyles();

  // todo add menu display for mobile
  const displayDesktop = () => {
    return (
      <Toolbar className="boxFlexElements">
        <Box className="boxFlexElements">
          <Logo />
          <HeaderNavigationMenu />
        </Box>
        <HeaderUserPanel />
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar position="static" className={classes.appbarHeader}>
        {displayDesktop()}
      </AppBar>
    </header>
  );
}
