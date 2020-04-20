import React from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AdminPanel extends React.Component {
  constructor(props){
    super(props);

    this.state = { Brand:"", Name:"", Price:"", Size:"", Artwork:"" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBrandChange = this.handleBrandChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleArtworkChange = this.handleArtworkChange.bind(this);
  }

  //Methods for setting variables to user input
  handleBrandChange(e){
    this.setState({Brand: e.target.value});
  }
  handleNameChange(e){
    this.setState({Name: e.target.value});
  }
  handlePriceChange(e){
    this.setState({Price: e.target.value});
  }
  handleSizeChange(e){
    this.setState({Size: e.target.value});
  }
  handleArtworkChange(e){
    this.setState({Artwork: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    
    const newCase = {
      brand: this.state.Brand,
      name: this.state.Name,
      price: this.state.Price,
      size: this.state.Size,
      artwork: this.state.Artwork
    };

    //Posts the request to the server, with the newly created Case
    axios.post('http://localhost:4000/api/cases', newCase) 
    .then()
    .catch();

    this.setState({ Brand:"", Name:"", Price:"", Size:"", Artwork:"" });    
  }

  render() {
    return (
      <div>
        <div>
        <h1><b>Add a new case!</b></h1>
          <div class="centerElement">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Case Brand</Form.Label>
                <Form.Control as="input" value={this.state.Brand} onChange={this.handleBrandChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Case Name</Form.Label>
                <Form.Control as="input" value={this.state.Name} onChange={this.handleNameChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control as="input" value={this.state.Price} onChange={this.handlePriceChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Size</Form.Label>
                <Form.Control as="input" value={this.state.Size} onChange={this.handleSizeChange}/>
              </Form.Group>            
              <Form.Group>
                <Form.Label>Case Artwork</Form.Label>
                <Form.Control as="textarea" value={this.state.Artwork} onChange={this.handleArtworkChange}/>
              </Form.Group>

              <Button variant="primary" type="submit">Add Case</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
