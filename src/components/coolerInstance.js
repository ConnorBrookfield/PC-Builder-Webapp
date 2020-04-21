import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';

class CoolerInstance extends React.Component{

  constructor(){
    super();

    // Methods
    this.addToBasket = this.addToBasket.bind(this);
  }

  // Methods
  addToBasket(e){
    sessionStorage.setItem(e.target.id, e.target.value);
  }

  render(){
    return(
      <div class="mx-auto justify-content-center">
        <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "22rem" }}>
          <Card.Img variant="top" height="200" width="200" src={this.props.cooler.artwork}/>
          <Card.Body>             
            <Card.Title><b>{this.props.cooler.brand}</b></Card.Title>
            <Card.Subtitle>
              {this.props.cooler.name} 
              <br></br>
              {this.props.cooler.price}
              <br></br>
              {this.props.cooler.type}
            </Card.Subtitle>        
          </Card.Body>
          <Button variant="primary" id="selectedCooler" value={this.props.cooler._id} onClick={this.addToBasket}>Click To Buy</Button>
        </Card>
      </div>
    )
  }
}

export default CoolerInstance;