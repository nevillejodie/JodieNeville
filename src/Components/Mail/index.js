import React, {useState} from 'react'
import Axios from 'axios'

function Mail() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const handleClick = (e) => {
    e.preventDefault();

    if(e.target.id === "name") {
      setName(e.target.value)
    } else if (e.target.id === "email") {
      setEmail(e.target.value)
    } else {
      setText(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name,
      email,
    /*   text */
    }
  

Axios.post("http://localhost:5000/api/sendMail", dataToSubmit)

setName('')
setEmail('')
/* setText('') */
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="name" placeholder="Include your name and a way to contact you" value={name} onChange={handleClick} style={{width: "350px"}}/>
       {/*  <input id="email" placeholder="email" value={email} onChange={handleClick}/> */}
        {/* <input id="text" placeholder="text" value={text} onChange={handleClick}/> */}
        <br/>
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  )

}

export default Mail

