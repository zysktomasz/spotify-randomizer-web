import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  activeMenuItem: {
    color: '#c7c7c7',
  },
}));

export type NavigationMenuItemProps = {
  name: string;
  href: string;
};

export default function NavigationMenuItem(props: { item: NavigationMenuItemProps }): JSX.Element {
  const classes = useStyles();
  const {
    item: { name, href },
  } = props;

  return (
    <Button
      {...{ color: 'inherit', className: 'menuButton' }}
      component={NavLink}
      to={href}
      exact
      activeClassName={classes.activeMenuItem}
    >
      {name}
    </Button>
  );
}
