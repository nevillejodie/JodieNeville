import React from 'react'
import css from './aboutme.module.css'
import cyberowl from '../../Images/logo.png'
import javascript from '../../Images/javascript.png'
import python from '../../Images/python.png'
import postgres from '../../Images/postgres.svg'
import reactldn from '../../Images/reactldn.png'

function About() {
    return ( <div className={css.wrapper}><h2>Launching Into Tech</h2>
      <p>My day job is a Junior Developer, specialising in the DevOps and QA functions. This experience in learning how to manage code in a live environment, as well as the process of testing and sanity checking, has been extremely valuable. I work for a start up called <a className={css.link} href="https://www.cyberowl.io/">CyberOwl</a> that specialises in cybersecurity for the maritime industry, so knowing the code I write is running on vessels in the ocean is pretty cool! You can see my bragdoc where I document my progress in this role <a className={css.link} href="https://www.bragdocs.com/@jodie-neville">here</a>.</p>
      <img src={cyberowl} className={css.prof} height="100px" alt=" cyberowl logo"/>
      <p>I have also come full circle in my involvement with Code First: Girls. I am now a remote instructor on the Introduction to Web Development course. It is so fulfilling to be able to give others the same opportunity that I had. On this course I teach HTML, CSS, JavaScript, project design and management, GitHub and version control. I have received some great feedback on my teaching and I enjoy it a lot. I have been accepted onto the Code First: Girls fellowship programme that will see me complete a research project for Code First: Girls, teach on a web development course, undergo confidence coaching, and attend mentoring sessions.  </p>
      <img alt="code first girls" className={css.prof} height="100px" src="https://pbs.twimg.com/profile_images/1301546795986817024/QTOU5xJj.jpg"/>
      <h2>Skills and Languages</h2>
      <div>
      <p> AWS Certified Cloud Practitioner | JavaScript | React | Shell Scripting | PostgreSQL | Web Sockets | Node | Azure | Testing</p>
      </div>
      <div className={css.tech}>
      <img className={css.techlogo} alt="js" height="60px" src={javascript}/><img className={css.techlogo} alt="react" height="60px" src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"/><img className={css.techlogo}  alt="python" height="60px" src={python}/><img className={css.techlogo}  alt="postgres" height="60px" src={postgres}/>
      </div>
      <h2>Events I've Spoken at</h2>
      <p>I had the opportunity to present our final bootcamp project to React London: Bring Your Own Project meetup. I really enjoyed speaking at this event and look forward to doing so more in the future. If you have a speaking opportunity then don't hesitate to get in touch. </p>
      <a href="https://twitter.com/helen8297/status/1278724241685389312"><img className={css.reactldn} height="300px" alt="twitter" src={reactldn}/></a> 
      </div>)
  }

  export default About