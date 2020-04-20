import React from 'react';
import Card from 'react-bootstrap/Card';

import '../App.css';

class RamInstance extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div>
          <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "22rem" }}>
            <Card.Img variant="top" height="200" width="200" src={this.props.ram.artwork}/>
            <Card.Body>             
              <Card.Title><b>{this.props.ram.brand}</b></Card.Title>
              <Card.Subtitle>
                {this.props.ram.name} 
                <br></br>
                {this.props.ram.price}
                <br></br>
                {this.props.ram.clockspeed}
                <br></br>
                {this.props.ram.cores}
                <br></br>
                {this.props.ram.socket}
              </Card.Subtitle>        
            </Card.Body>
          </Card>
      </div>
    )
  }
}

export default RamInstance;