import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './components/header/Header';
import Homepage from './components/Homepage/Homepage';

function App(): JSX.Element {
  return (
    <Flex height="100%" direction="column">
      <Header />
      {/* todo: add routing and render different pages based on routes */}
      <Homepage />
    </Flex>
  );
}

export default App;
