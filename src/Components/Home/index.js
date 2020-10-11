import React from 'react'
import css from './home.module.css'
import Example from '../Projects'


function Home() {
    return (<div className={css.wrapper}><h2>Hi, I'm Jodie.</h2>
    <p>
    Below are some of the websites and applications I've built.</p>
    <h2>Projects</h2>
    <Example/>
   </div>)
  }

  export default Home