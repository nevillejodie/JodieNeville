import React from 'react'
import css from './home.module.css'
import Projects from '../Projects'


function Home() {
    return (<div className={css.wrapper}><h1 className={css.intro}>Hi, I'm Jodie.</h1>
    <div className={css.experiment}>
    <p className={css.p}>I am a Birmingham-based developer trained through the <a className={css.link} href="https://www.schoolofcode.co.uk/">School of Code</a> bootcamp. My switch to coding is thanks to the <a className={css.link} href="https://codefirstgirls.org.uk/">Code First: Girls</a>  Intro to Web Development course. Having previously managed student experience projects and initiatives at the University of Birmingham, I am interested in using code to creatively solve problems and build positive user and developer experiences. </p>
    </div>
    <h2>Projects</h2>
    <Projects/>
   </div>)
  }

  export default Home