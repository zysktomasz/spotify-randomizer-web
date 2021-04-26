import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import FluidContainer from '../common/FluidContainer';
import HeaderUserPanel from './HeaderUserPanel';
import HeaderNavigationMenu from './HeaderNavigationMenu';

function Header(): JSX.Element {
  return (
    <Box as="header" bg="gray.700" color="white">
      <FluidContainer py={5}>
        <Flex as="nav" justify="space-between" alignItems="center">
          <HeaderNavigationMenu />
          <Spacer />
          <HeaderUserPanel />
        </Flex>
      </FluidContainer>
    </Box>
  );
}

export default Header;
