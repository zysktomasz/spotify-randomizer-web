import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/header/Header';
import Homepage from './component/homepage/Homepage';
import Footer from './component/footer/Footer';
import SuccessfulLoginHandler from './component/authentication/SuccessfulLoginHandler';
import Routes from './common/route';
import Playlists from './component/playlist/Playlists';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path={Routes.SUCCESSFUL_LOGIN_HANDLER}>
            <SuccessfulLoginHandler />
          </Route>
          <Route path={Routes.PLAYLISTS}>
            <Playlists />
          </Route>
          <Route path={Routes.HOME}>
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
