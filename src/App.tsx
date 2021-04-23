import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from './components/header/Header';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/footer/Footer';

function App(): JSX.Element {
  return (
    <Flex height="100%" direction="column">
      <Header />
      {/* todo: add routing and render different pages based on routes */}
      <Box mt={{ base: 4, md: 12 }} flex="1 0 auto">
        <Homepage />
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
