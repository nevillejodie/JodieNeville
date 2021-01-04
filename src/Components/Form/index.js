import React from 'react'
import css from './form.module.css'

const Form = () => {
    return (
        <div className={css.formy}>
        <h2>Get in Touch</h2>
        <form action="https://formspree.io/f/mleooejn" method="POST">
        <input placeholder="Enter Email Address" type="email" name="_replyto"/>
        <input placeholder="Enter Your Message" type="text" name="name"/>
        <input type="submit" value="Send"/>
        </form>
        </div>
    )
}

export default Form