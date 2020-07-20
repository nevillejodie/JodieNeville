import React from 'react'
import css from './contact.module.css'

function Contact() {
    return (<div className={css.wrapper}><h2>Get in touch</h2>
      <p>I would be particularly receptive to hearing about job, speaking, or teaching opportunities. Get in touch on the following channels: </p>
      <a href="https://twitter.com/JodieNeville" rel="noopener noreferrer" target="_blank">
      <button className={css.btn}><img height="25px" alt="twitter icon" src="https://i.ibb.co/cJw1VZt/transp-twitter.png"/> @JodieNeville</button>
      </a>
      <a href="https://github.com/nevillejodie" rel="noopener noreferrer" target="_blank">
      <button className={css.btn}><img height="25px" alt="github icon" src="https://i.ibb.co/hgW1VBh/transp-github-better.png"/> @nevillejodie</button>
      </a>
      <a href="https://www.linkedin.com/in/jlneville/" rel="noopener noreferrer" target="_blank">
      <button className={css.btn}><img height="25px" alt="linkedin icon" src="https://i.ibb.co/MMxKZ0T/transp-linked-in.png"/> @jlneville</button>
      </a>
      </div>)
  }

  export default Contact
