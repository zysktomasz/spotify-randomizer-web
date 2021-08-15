import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/header/Header';
import Homepage from './component/homepage/Homepage';
import Footer from './component/footer/Footer';
import SuccessfulLoginHandler from './component/authentication/SuccessfulLoginHandler';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/successfulLoginHandler">
            <SuccessfulLoginHandler />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
