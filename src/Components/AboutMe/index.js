import React from 'react'
import css from './aboutme.module.css'
import cyberowl from '../../Images/CyberOwl-Horizontal-Logo-MIDNIGHT.png'

function About() {
    return ( <div className={css.wrapper}><h2>Launching Into Tech</h2>
      <p className={css.p}>I am a Birmingham-based developer trained through the 4-month, full-time intensive School of Code bootcamp. My switch to coding is thanks to the Code First: Girls Intro to Web Development course. Having previously managed student experience projects and initiatives at the University of Birmingham, I am interested in using code to creatively solve problems and build positive user and developer experiences. </p>
      <img className={css.prof} width="500px" alt="picture of the School of Code Cohort" src="https://media-exp1.licdn.com/dms/image/C5616AQHoNkSuuHxZkA/profile-displaybackgroundimage-shrink_350_1400/0?e=1609372800&v=beta&t=P9ot6Yb2HVT5Li-IUnzN6UqewoY_RfP5w-u6SR_c_14"/>
      <p>My day job is a Junior Developer, specialising in the DevOps and QA functions. This experience in learning how to manage code in a live environment, as well as the process of testing and sanity checking, has been extremely valuable. I work for a start up that specialises in cybersecurity for the maritime industry, so knowing the code I write is running on vessels in the ocean is pretty cool!</p>
      <img src={cyberowl} className={css.prof} height="100px" alt="picture of cyberowl logo"/>
      <p>I have also come full circle in my involvement with Code First: Girls. I am now a remote instructor on the Introduction to Web Development course. It is so fulfilling to be able to give others the same opportunity that I had. On this course I teach HTML, CSS, JavaScript, project design and management, GitHub and version control. I have received some great feedback on my teaching and I enjoy it a lot.</p>
      <img className={css.prof} height="100px" src="https://pbs.twimg.com/profile_images/1301546795986817024/QTOU5xJj.jpg"/>
      <p>I had the opportunity to present our final bootcamp project to React London: Bring Your Own Project meetup. I really enjoyed speaking at this event and look forward to doing so more in the future. If you have a speaking opportunity then don't hesitate to get in touch. </p>
      </div>)
  }

  export default About