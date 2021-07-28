import React from 'react'
import css from './home.module.css'
import Projects from '../Projects'


function Home() {
    return (<div className={css.wrapper}><h1 className={css.intro}>Hi, I'm Jodie.</h1>
    <div className={css.experiment}>
    <p className={css.p}>I am a Cheltenham based Cloud Security Engineer. My switch to coding is thanks to the <a className={css.link} href="https://codefirstgirls.org.uk/">Code First: Girls</a>  Intro to Web Development course and the <a className={css.link} href="https://www.schoolofcode.co.uk/">School of Code</a> bootcamp. This portfolio is written in React. Having previously managed student experience projects and initiatives at the University of Birmingham, I am interested in using education to bring security princples to developers and non-developers alike.</p>
    </div>
    <h2>Projects</h2>
    <Projects/>
   </div>)
  }

  export default Home