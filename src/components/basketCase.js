import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import '../App.css';

class BasketCase extends React.Component{

  constructor(){
    super();

    // Methods
    this.removeFromBasket = this.removeFromBasket.bind(this);
  }

  removeFromBasket(e){
    sessionStorage.clear(e.target.id);
  }

  render(){
    return(
      <div class="mx-auto justify-content-center">
        <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "22rem" }}>
          <Card.Img variant="top" height="200" width="200" src={this.props.pcCase.artwork}/>
          <Card.Body>             
            <Card.Title><b>{this.props.pcCase.brand}</b></Card.Title>
            <Card.Subtitle>
              {this.props.pcCase.name} 
              <br></br>
              {this.props.pcCase.price}
              <br></br>
              {this.props.pcCase.size}
            </Card.Subtitle>        
          </Card.Body>
          <Button variant="primary" id="selectedCase" value={this.props.pcCase._id} onClick={this.removeFromBasket}>Remove Item</Button>
        </Card>
      </div>
    )
  }
}

export default BasketCase;