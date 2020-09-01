import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'

const initialState = {
    name: "",
    email: "",
    mobileNum: "",
    message: "",
}

const Mail = () => {
    const [formState, setFormState] = useState(initialState);

    function handleStateChange(e) {
        e.persist();
        const value = e.target.value;
        const name = e.target.name;
        setFormState({ ...formState, [name]: value });
        console.log(formState);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    return (
        <div>
       <Form>
  <Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Control placeholder="Enter email" value={formState.email}  onChange={handleStateChange} type="text" name="email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Name" value={formState.name}  onChange={handleStateChange} type="text" name="name" />
  </Form.Group>
  
  <Form.Group>
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" value={formState.message}  onChange={handleStateChange} type="text" name="message"  />
  </Form.Group>
  <Button variant="primary" type="submit" onSubmit={handleSubmit}>
    Submit
  </Button>
</Form>
        </div>
 
        
    )
}

export default Mail

