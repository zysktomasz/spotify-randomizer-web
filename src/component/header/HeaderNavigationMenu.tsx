import React from 'react';
import { Box } from '@material-ui/core';
import NavigationMenuItem, { NavigationMenuItemProps } from './NavigationMenuItem';
import Routes from '../../common/route';
import { useAppSelector } from '../../redux/hooks';
import { isValidJwt } from '../../common/jwtValidator';

export default function HeaderNavigationMenu(): JSX.Element {
  const userStateJwt = useAppSelector((state) => state.user.jwt);
  const isLoggedIn: boolean = isValidJwt(userStateJwt);

  const menuItems: NavigationMenuItemProps[] = [
    { name: 'Homepage', href: Routes.HOME, onlyForAuthenticated: false },
    {
      name: 'My Playlists',
      href: Routes.PLAYLISTS,
      onlyForAuthenticated: true,
    },
  ];

  return (
    <Box style={{ marginLeft: '50px' }}>
      {menuItems
        .filter((item) => !item.onlyForAuthenticated || (item.onlyForAuthenticated && isLoggedIn))
        .map((item) => (
          <NavigationMenuItem key={item.name} item={item} />
        ))}
    </Box>
  );
}
