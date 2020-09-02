import React from 'react'
import css from './contact.module.css'
import Mail from '../Mail'

function Contact() {
    return (<div className={css.wrapper}><h2>Get in touch</h2>
      <p>If you would like me to build a website for you get in touch on one of the following channels:</p>
      <a href="https://twitter.com/JodieNeville" rel="noopener noreferrer" target="_blank">
      <button className={css.btn}><img height="25px" alt="twitter icon" src="https://i.ibb.co/cJw1VZt/transp-twitter.png"/> @JodieNeville</button>
      </a>
      <a href="https://github.com/nevillejodie" rel="noopener noreferrer" target="_blank">
      <button className={css.btn}><img height="25px" alt="github icon" src="https://i.ibb.co/hgW1VBh/transp-github-better.png"/> @nevillejodie</button>
      </a>
      <a href="https://www.linkedin.com/in/jlneville/" rel="noopener noreferrer" target="_blank">
      <button className={css.btn}><img height="25px" alt="linkedin icon" src="https://i.ibb.co/MMxKZ0T/transp-linked-in.png"/> @jlneville</button>
      </a>
      <h4>Or alternatively send me your details and I'll get back to you:</h4>
      <Mail/>
      </div>)
  }

  export default Contact
