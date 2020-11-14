import React from 'react'
import css from './contact.module.css'
import email from '../../Images/email.png'
import github from '../../Images/github.png'
import linkedin from '../../Images/linkedin.png'
import twitter from '../../Images/twitter-logo.png'

function Contact() {
    return (<div className={css.wrapper}><h2>Get in Touch</h2>
      <p>If you'd like to chat about anything you've come across on this portfolio please reach out on one of the following channels:</p>
    <div className={css.logos}>
     <a href="mailto:jlneville92@gmail.com" rel="noopener noreferrer" target="_blank"><img className={css.icon} alt="email logo" height='60px' src={email}/></a>
     <a href="https://github.com/nevillejodie" rel="noopener noreferrer" target="_blank"><img className={css.icon} alt="github logo" height='60px' src={github}/></a>
     <a href="https://www.linkedin.com/in/jlneville/" rel="noopener noreferrer" target="_blank"><img className={css.icon} alt="linkedin logo" height='60px' src={linkedin}/></a>
     <a href="https://twitter.com/JodieNeville" rel="noopener noreferrer" target="_blank"><img className={css.icon} alt="twitter logo" height='60px' src={twitter}/></a>
     </div>
      <p>Look forward to meeting you &#128522;</p>
      </div>)
  }

  export default Contact
