import React from 'react'
import ReactPlayer from 'react-player/youtube'
import css from './home.module.css'

function Home() {
    return (<div className={css.wrapper}><h2>Jodie Neville, Software Developer</h2>;
    <ReactPlayer  url='https://youtu.be/GRnnmIiAJ0U' /></div>)
  }

  export default Home