/* eslint-disable */
import { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Container from './Container.js';
import Footer from './Footer.js';

function App() {
  return (
    <div id="wrap">
      <div>
        <Header/>
        <Container/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;