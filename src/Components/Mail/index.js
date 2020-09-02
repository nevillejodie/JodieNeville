import React, {useState} from 'react'
import Axios from 'axios'

function Mail() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


  const handleClick = (e) => {
    e.preventDefault();

    if(e.target.id === "name") {
      setName(e.target.value)
    } else {
      setEmail(e.target.value)
    } 
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name,
      email,

    }
  

Axios.post("http://localhost:5000/api/sendMail", dataToSubmit)

setName('')
setEmail('')

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="name" placeholder="Include your name and a way to contact you" value={name} onChange={handleClick} style={{width: "350px"}}/>
  
        <br/>
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  )

}

export default Mail

