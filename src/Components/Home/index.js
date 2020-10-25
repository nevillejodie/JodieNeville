import React from 'react'
import css from './home.module.css'
import Projects from '../Projects'


function Home() {
    return (<div className={css.wrapper}><h2 className={css.intro}>Hi, I'm Jodie.</h2>
    <p>
    I'm a Birmingham based woman in Tech. Click below to see some of the websites and applications I've built:</p>
    <h2>Projects</h2>
    <Projects/>
   </div>)
  }

  export default Home