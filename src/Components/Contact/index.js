import React from 'react'
import css from './contact.module.css'

function Contact() {
    return (<div className={css.wrapper}><h2>Get in Touch</h2>
      <p>If you'd like to chat about anything you've come across on this portfolio please reach out on one of the following channels:</p>
      <div className={css.btnWrap}>
      <a href="https://twitter.com/JodieNeville" rel="noopener noreferrer" target="_blank">
      <button className={css.btn}><img height="25px" width="25px" className={css.icon} alt="twitter icon" src="https://i.ibb.co/cJw1VZt/transp-twitter.png"/> @JodieNeville</button>
      </a>
      <a href="https://github.com/nevillejodie" rel="noopener noreferrer" target="_blank">
      <button className={css.btn}><img className={css.icon} height="25px" width="25px" alt="github icon" src="https://i.ibb.co/hgW1VBh/transp-github-better.png"/> @nevillejodie</button>
      </a>
      <a href="https://www.linkedin.com/in/jlneville/" rel="noopener noreferrer" target="_blank">
      <button className={css.btn}><img className={css.icon} height="25px" width="25px" alt="linkedin icon" src="https://i.ibb.co/MMxKZ0T/transp-linked-in.png"/> @jlneville</button>
      </a></div>
      <br></br>
      <br></br>
      <p>Or alternatively email me <a href="mailto:jlneville92@gmail.com" className={css.email}>jlneville92@gmail.com</a> &#128231;</p>
      <p>Look forward to meeting you &#128522;</p>
      </div>)
  }

  export default Contact
