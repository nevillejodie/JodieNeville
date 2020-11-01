import React from 'react'
import css from './home.module.css'
import Projects from '../Projects'


function Home() {
    return (<div className={css.wrapper}><h2 className={css.intro}>Hi, I'm Jodie.</h2><img className={css.prof} height="150px" alt="pic of me" src="https://pbs.twimg.com/profile_images/1315278321056448513/7eFQLBiZ_400x400.jpg"/>
    <p className={css.p}>I am a Birmingham-based developer trained through the 4-month, full-time intensive School of Code bootcamp. My switch to coding is thanks to the Code First: Girls Intro to Web Development course. Having previously managed student experience projects and initiatives at the University of Birmingham, I am interested in using code to creatively solve problems and build positive user and developer experiences. </p>
    <p>
     Learn more about me and explore some of the websites and applications I've built below.</p>
    <h2>Projects</h2>
    <Projects/>
   </div>)
  }

  export default Home