import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import '../App.css';

class CaseInstance extends React.Component{

  constructor(){
    super();

    // Add to basket method declaration
    this.addToBasket = this.addToBasket.bind(this);
  }

  // Add to Basket method Definition
  addToBasket(e){
    sessionStorage.setItem(e.target.id, e.target.value);
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
          <Button variant="primary" id="selectedCase" value={this.props.pcCase._id} onClick={this.addToBasket}>Click To Buy</Button>
        </Card>
      </div>
    )
  }
}

export default CaseInstance;