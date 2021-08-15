import React from 'react';
import { Box } from '@material-ui/core';
import NavigationMenuItem, { NavigationMenuItemProps } from './NavigationMenuItem';
import Routes from '../../common/route';

export default function HeaderNavigationMenu(): JSX.Element {
  const menuItems: NavigationMenuItemProps[] = [
    { name: 'Homepage', href: Routes.HOME },
    {
      name: 'My Playlists',
      href: Routes.PLAYLISTS,
    },
  ];

  return (
    <Box style={{ marginLeft: '50px' }}>
      {menuItems.map((item) => (
        <NavigationMenuItem key={item.name} item={item} />
      ))}
    </Box>
  );
}
