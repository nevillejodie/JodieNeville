import React from 'react'
import css from './aboutme.module.css'
import cyberowl from '../../Images/logo.png'
import javascript from '../../Images/javascript.png'
import python from '../../Images/python.png'
import react from '../../Images/react.png'
import postgres from '../../Images/postgres.svg'
import reactldn from '../../Images/reactldn.png'

function About() {
    return ( <div className={css.wrapper}><h2>Launching Into Tech</h2>
      <p className={css.p}>I am a Birmingham-based developer trained through the 4-month, full-time intensive School of Code bootcamp. My switch to coding is thanks to the Code First: Girls Intro to Web Development course. Having previously managed student experience projects and initiatives at the University of Birmingham, I am interested in using code to creatively solve problems and build positive user and developer experiences. </p>
      <img alt="the School of Code Cohort" id={css.prof2} className={css.prof1} width="500px" src="https://media-exp1.licdn.com/dms/image/C5616AQHoNkSuuHxZkA/profile-displaybackgroundimage-shrink_350_1400/0?e=1609372800&v=beta&t=P9ot6Yb2HVT5Li-IUnzN6UqewoY_RfP5w-u6SR_c_14"/>
      <p>My day job is a Junior Developer, specialising in the DevOps and QA functions. This experience in learning how to manage code in a live environment, as well as the process of testing and sanity checking, has been extremely valuable. I work for a start up that specialises in cybersecurity for the maritime industry, so knowing the code I write is running on vessels in the ocean is pretty cool! You can see my bragdoc where I document my progress in this role <a className={css.link} href="https://www.bragdocs.com/@jodie-neville">here</a>.</p>
      <img src={cyberowl} className={css.prof2} height="100px" alt=" cyberowl logo"/>
      <p>I have also come full circle in my involvement with Code First: Girls. I am now a remote instructor on the Introduction to Web Development course. It is so fulfilling to be able to give others the same opportunity that I had. On this course I teach HTML, CSS, JavaScript, project design and management, GitHub and version control. I have received some great feedback on my teaching and I enjoy it a lot. I have been accepted onto the Code First: Girls fellowship programme that will see me complete a research project for Code First: Girls, teach on a web development course, undergo confidence coaching, and attend mentoring sessions.  </p>
      <img alt="code first girls" className={css.prof} height="100px" src="https://pbs.twimg.com/profile_images/1301546795986817024/QTOU5xJj.jpg"/>
      <h2>Skills and Languages</h2>
      <ul className={css.listOne}><li><a className={css.link} href="https://www.youracclaim.com/badges/cb0f3763-5fec-4abc-a4c0-ce1d8ecdf6d1/linked_in">AWS Certified Cloud Practitioner</a></li><li>JavaScript and React</li><li>Python</li></ul>
      <ul className={css.listTwo}><li>PostgreSQL</li><li>Web Sockets</li><li>Shell Scripting</li></ul>
      <ul className={css.listThree}><li>NodeJS</li><li>Regression Testing</li><li>Microsoft Azure</li></ul>
      <div className={css.tech}><img alt="js" height="60px" src={javascript}/><img alt="react" height="60px" src={react}/><img alt="python" height="60px" src={python}/><img alt="postgres" height="60px" src={postgres}/></div>
      <h2>Events I've Spoken at</h2>
      <p>I had the opportunity to present our final bootcamp project to React London: Bring Your Own Project meetup. I really enjoyed speaking at this event and look forward to doing so more in the future. If you have a speaking opportunity then don't hesitate to get in touch. </p>
      <a href="https://twitter.com/helen8297/status/1278724241685389312"><img className={css.reactldn} height="300px" alt="twitter" src={reactldn}/></a> 
      </div>)
  }

  export default About