import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import Form from "react-bootstrap/Form";

class Contact extends React.Component{

  render(){
    return(
      <div class="bodyFormat">
          <br/>
          <h1>Contact Us!</h1>
          <h2>If you have any queries, questions or feedback, 
            do not hesitate to contact us using the form below, 
            and we will get back to you as soon as possible!
          </h2>
          <br/>
          <div class="centerElement">
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control as="input" placeholder="Email"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Feedback</Form.Label>
              <Form.Control as="textarea" placeholder="Feedback"/>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
            <br/><br/>
          </Form>
        </div>
      </div>
    )
  }
}

export default Contact;