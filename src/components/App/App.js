import React from 'react';
import './App.css';
import { WebPost } from '../../features/webPost/webPost';
import HomePageMenu from '../HomePageMenu/HomePageMenu';
function App() {
  return (
    <div className="app">
      <div className="app-container">
        <HomePageMenu />
        <div className='right-side-content'>
          <p>Home</p>
          <p>GoodBye World</p>
        </div>
      </div>
    </div>
  );
}

export default App;
