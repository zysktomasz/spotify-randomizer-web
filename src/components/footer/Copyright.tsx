import React from 'react';
import { Link, Text, TextProps } from '@chakra-ui/react';

function Copyright(props: TextProps): JSX.Element {
  return (
    <Text fontSize={'sm'} {...props}>
      &copy; {new Date().getFullYear()}{' '}
      <Link href="http://zysk.it/" isExternal>
        Tomasz Zysk
      </Link>
      . All rights reserved.
    </Text>
  );
}

export default Copyright;
