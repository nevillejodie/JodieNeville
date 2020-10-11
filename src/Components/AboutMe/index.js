import React from 'react'
import css from './aboutme.module.css'
import Avatar from '../../Images/avatar.png'

function About() {
    return ( <div className={css.wrapper}><h2>Jodie Neville, Launching Into Tech</h2>
    <div className={css.flier}><img alt="avatar made for School of Code" src={Avatar}/></div>
    
      <p className={css.p}>I am a Birmingham-based developer trained through the 4-month, full-time intensive School of Code bootcamp. My switch to coding is thanks to the Code First: Girls Intro to Web Development course. Having previously managed student experience projects and initiatives at the University of Birmingham, I am interested in using code to creatively solve problems and build positive user and developer experiences. </p>
      <p>My day job is a Junior Developer, specialising in the DevOps and QA functions. This experience in learning how to manage code in a live environment, as well as the process of testing and sanity checking, has been extremely valuable. I work for a start up that specialises in cybersecurity for the maritime industry, so knowing the code I write is running live on vessels in the ocean is also pretty cool!</p>
      <p>I have also come full circle in my involvement with Code First: Girls. I am now a remote instructor on the Introduction to Web Development course. It is so fulfilling to be able to give others the same opportunity that I had. On this course I teach HTML, CSS, JavaScript, project design and management, GitHub and version control. I have received some great feedback on my teaching and I enjoy it a lot.</p>
      <p>I had the opportunity to present our final bootcamp project to React London: Bring Your Own Project meetup. I really enjoyed speaking at this event and look forward to doing so more in the future. If you have a speaking opportunity then don't hesitate to <a className={css.link} href="https://jodie-neville.netlify.app/contact"> get in touch</a>. </p>
      </div>)
  }

  export default About