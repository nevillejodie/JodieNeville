import React from 'react'
import css from './aboutme.module.css'
import Avatar from '../../Images/avatar.png'

function About() {
    return ( <div className={css.wrapper}><h2>Jodie Neville, Launching Into Tech</h2>
    <div className={css.flier}><img alt="avatar made for School of Code" src={Avatar}/></div>
    
      <p className={css.p}>I am a Birmingham-based developer trained through the 4-month, full-time intensive School of Code bootcamp. My switch to coding is thanks to the Code First: Girls Intro to Web Development course. Having previously managed student experience projects and initiatives at the University of Birmingham, I am interested in using code to creatively solve problems and build positive user and developer experiences. </p>
      <p>I have now come full circle and am volunteering as a remote instructor on the Code First: Girls Introduction to Web Development course. It is so fulfilling to be able to give others the same opportunity that I had. On this course I teach HTML, CSS, JavaScript, project design and management, GitHub and version control. I have received some really complimentary feedback on my teaching and I enjoy it thoroughly!</p>
      <p>I had the opportunity to present our final bootcamp project to React London: Bring Your Own Project meetup. I really enjoyed speaking at this event and look forward to doing it more in the future. </p>
      <p>I regularly attend Code First: Girls, Codebar and Brum JS meetups. I really enjoy being a part of the technology community in Birmingham. My long-term mission is to utilise technology for good and give back to the communities that have supported my own journey into tech. </p>
      </div>)
  }

  export default About