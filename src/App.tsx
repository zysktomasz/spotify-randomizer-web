import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Homepage from './component/homepage/Homepage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
