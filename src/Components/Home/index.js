import React from 'react'
import css from './home.module.css'
import Projects from '../Projects'


function Home() {
    return (<div className={css.wrapper}><h2 className={css.intro}>Hi, I'm Jodie.</h2><img className={css.prof} height="150px" alt="pic of me" src="https://pbs.twimg.com/profile_images/1315278321056448513/7eFQLBiZ_400x400.jpg"/>
    <p>
    I'm a Birmingham based woman in Tech. Click below to see some of the websites and applications I've built:</p>
    <h2>Projects</h2>
    <Projects/>
   </div>)
  }

  export default Home