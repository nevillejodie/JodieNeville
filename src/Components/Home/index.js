import React from 'react'
import ReactPlayer from 'react-player/youtube'
import css from './home.module.css'
import Example from '../Projects'


function Home() {
    return (<div className={css.wrapper}><h2>Welcome to my portfolio</h2>
    
    <h2>Projects</h2>
    <Example/>
   </div>)
  }

  export default Home