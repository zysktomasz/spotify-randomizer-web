import { Link, useLocation } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import React from 'react';

interface HeaderLinkElementProps {
  name: string;
  path: string;
}

function NavigationLinkElement(props: HeaderLinkElementProps): JSX.Element {
  const { name, path } = props;
  const currentPath = useLocation().pathname;

  const isActive = currentPath === path;
  return (
    <Link to={{ pathname: path }}>
      <Text borderBottomWidth={isActive ? '4px' : 'none'} borderColor={isActive ? 'primary.500' : 'none'}>
        {name}
      </Text>
    </Link>
  );
}

export default NavigationLinkElement;
