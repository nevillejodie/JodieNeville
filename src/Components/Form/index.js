import React from 'react'
import css from './form.module.css'

const Form = () => {
    return (
        <div className={css.formy}>
        <form action="https://formspree.io/f/mleooejn" method="POST">
        <h3>Your Name</h3>
        <input type="text" name="name"/>
        <h3>Your Message</h3>
        <input type="email" name="_replyto"/>
        <input type="submit" value="Send"/>
        </form>
        </div>
    )
}

export default Form