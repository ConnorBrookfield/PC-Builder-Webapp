import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';

class MotherboardInstance extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div>
          <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "22rem" }}>
            <Card.Img variant="top" height="200" width="200" src={this.props.motherboard.artwork}/>
            <Card.Body>             
              <Card.Title><b>{this.props.motherboard.brand}</b></Card.Title>
              <Card.Subtitle>
                {this.props.motherboard.name} 
                <br></br>
                {this.props.motherboard.price}
                <br></br>
                {this.props.motherboard.size}
              </Card.Subtitle>        
            </Card.Body>
            <Button variant="primary">Click To Buy</Button>
          </Card>
      </div>
    )
  }
}

export default MotherboardInstance;