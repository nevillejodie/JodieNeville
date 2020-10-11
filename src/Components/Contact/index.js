import React from 'react'
import css from './contact.module.css'
import Avatar from '../../Images/avatar.png'

function Contact() {
    return (<div className={css.wrapper}><h2>Get in Touch</h2>
    <div className={css.flier}><img alt="avatar made for School of Code" src={Avatar}/></div>
      <p>If you'd like to chat about anything you've come across on this portfolio please reach out on one of the following channels:</p>
      <a href="https://twitter.com/JodieNeville" rel="noopener noreferrer" target="_blank">
      <button className={css.btn}><img height="25px" alt="twitter icon" src="https://i.ibb.co/cJw1VZt/transp-twitter.png"/> @JodieNeville</button>
      </a>
      <a href="https://github.com/nevillejodie" rel="noopener noreferrer" target="_blank">
      <button className={css.btn}><img height="25px" alt="github icon" src="https://i.ibb.co/hgW1VBh/transp-github-better.png"/> @nevillejodie</button>
      </a>
      <a href="https://www.linkedin.com/in/jlneville/" rel="noopener noreferrer" target="_blank">
      <button className={css.btn}><img height="25px" alt="linkedin icon" src="https://i.ibb.co/MMxKZ0T/transp-linked-in.png"/> @jlneville</button>
      </a>
      <br></br>
      <br></br>
      <p>Or alternatively email me <a className={css.email}>jlneville92@gmail.com</a></p>
      <p>Look forward to meeting you :)</p>
      </div>)
  }

  export default Contact
