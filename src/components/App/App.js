import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';

function App() {
  return (
    <div className="app">
      <Header />
      <div id="header-line"></div>
      <Homepage />
    </div>
  );
}

export default App;
