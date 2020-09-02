import React from 'react'
import ReactPlayer from 'react-player/youtube'
import css from './home.module.css'
import Example from '../Projects'


function Home() {
    return (<div className={css.wrapper}><h2>Welcome to my portfolio</h2>
    <p>Watch my introductory video for FemTechConf to learn a bit more about me:</p>;
    <ReactPlayer className={css.video} url='https://youtu.be/GRnnmIiAJ0U' />
    <h2>Projects</h2>
    <Example/>
   </div>)
  }

  export default Home