import React from 'react'
import css from './form.module.css'

const Form = () => {
    return (
        <div className={css.formy}>
        <h2>Get in Touch</h2>
        <form action="https://formspree.io/f/mleooejn" method="POST">
        
        <h3>Your Email Address</h3>
        <input type="email" name="_replyto"/>

        <h3>Your Message</h3>
        <input type="text" name="name"/>
        <br></br>
        <input type="submit" value="Send"/>
        </form>
        </div>
    )
}

export default Form