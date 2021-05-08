import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from './components/header/Header';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginHandler from './components/Login/LoginHandler';
import Routes from './common/routes';
import Playlists from './components/spotify/Playlists';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Flex height="100%" direction="column">
        <Header />
        <Box mt={{ base: 4, md: 12 }} flex="1 0 auto">
          <Switch>
            <Route path={Routes.LOGIN_HANDLER}>
              <LoginHandler />
            </Route>
            <Route path={Routes.PLAYLISTS}>
              <Playlists />
            </Route>
            <Route path={Routes.HOME}>
              <Homepage />
            </Route>
          </Switch>
        </Box>
        <Footer />
      </Flex>
    </BrowserRouter>
  );
}

export default App;
