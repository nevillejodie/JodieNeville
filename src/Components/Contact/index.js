import React from 'react'
import css from './contact.module.css'

function Contact() {
    return (<div className={css.wrapper}><h2>Get in touch</h2>
      <p>I would be particularly receptive to hearing about job, speaking, or teaching opportunities in Tech. Get in touch on the following channels: </p>
      <button className={css.btn}><img height="25px" alt="twitter icon" src="https://i.ibb.co/cJw1VZt/transp-twitter.png"/> @JodieNeville</button>
      <button className={css.btn}><img height="25px" alt="github icon" src="https://i.ibb.co/hgW1VBh/transp-github-better.png"/> @nevillejodie</button>
      <button className={css.btn}><img height="25px" alt="linkedin icon" src="https://i.ibb.co/MMxKZ0T/transp-linked-in.png"/> @jlneville</button>
      </div>)
  }

  export default Contact
