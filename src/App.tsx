import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Homepage from './component/homepage/Homepage';
import Footer from './component/footer/Footer';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
