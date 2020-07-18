import React from 'react'
import css from './aboutme.module.css'
import Avatar from '../../Images/avatar.png'

function About() {
    return ( <div className={css.wrapper}><h2>Jodie Neville, Software Developer</h2>
    <div className={css.flier}><img alt="avatar made for School of Code" src={Avatar}/></div>
    
      <p className={css.p}>I am a Birmingham-based developer trained through the 4-month, full-time intensive School of Code bootcamp. My switch to coding is thanks to the Code First: Girls Intro to Web Development course. Having previously managed student experience projects and initiatives at the University of Birmingham, I am interested in using code to creatively solve problems and build positive user and developer experiences. I regularly attend Code First: Girls, Codebar and Brum JS meetups. I really enjoy being a part of the technology community in Birmingham. My long-term mission is to utilise technology for good and give back to the communities that have supported my own journey into tech. </p>
      </div>)
  }

  export default About