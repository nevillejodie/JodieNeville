import React from 'react';
import './App.css';
import About from '../AboutMe'
import Contact from '../Contact'
import Home from '../Home'
import Fade from 'react-reveal'

export default function App() {
  return (
    <Fade>
      <Home/>
      <About/>
      <Contact/>
    </Fade>
  );
}




