import React from 'react';
import Card from 'react-bootstrap/Card';

import '../App.css';

class MotherboardInstance extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div>
          <Card className="bg-dark m-5" border="primary" style={{ width: '12.625rem', height: "26rem" }}>
            <Card.Img variant="top" height="200" width="200" src={this.props.motherboard.artwork}/>
            <Card.Body>             
              <Card.Title><b>{this.props.motherboard.brand}</b></Card.Title>
              <Card.Subtitle>{this.props.motherboard.name} - <i>{this.props.motherboard.price}</i></Card.Subtitle>        
            </Card.Body>
          </Card>
      </div>
    )
  }
}

export default MotherboardInstance;