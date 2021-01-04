import React from 'react';
import './App.css';
import About from '../AboutMe'
import Contact from '../Contact'
import Home from '../Home'
import Fade from 'react-reveal'
import DarkToggle from '../DarkMode'
import Form from '../Form'

export default function App() {
  return (
    <Fade>
    <div class="darkMode"><DarkToggle/></div>
      <Home/>
      <About/>
      <Form/>
      <br></br>
      <br></br>
      <br></br>
      <Contact/>
    </Fade>
  );
}




