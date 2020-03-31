import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import Form from "react-bootstrap/Form";
//import Modal from 'react-bootstrap/Modal'

/* function PopUp(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); */

class Contact extends React.Component{
  

  render(){
    return(
      
      <div class="bodyFormat">
          <h1>Contact Us!</h1>
          <h2>If you have any queries, questions or feedback, 
            do not hesitate to contact us using the form below, 
            and we will get back to you as soon as possible!
          </h2>
          <br/>

          <div class="centerElement">
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control as="input" placeholder="Email"/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control as="textarea" placeholder="Feedback"/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Feedback</Form.Label>
                <Form.Control as="textarea" placeholder="Feedback"/>
              </Form.Group>
              </Form>
           
           
              {/* <Button variant="primary" onClick={handleShow}>
              Launch demo modal
              </Button>   
              

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal> */}
            </div>
        </div>
      )
    }
  }
//}
//render(<PopUp />);

export default Contact;