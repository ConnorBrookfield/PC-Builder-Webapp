import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';

class GpuInstance extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div class="mx-auto justify-content-center">
        <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "22rem" }}>
          <Card.Img variant="top" height="200" width="200" src={this.props.gpu.artwork}/>
          <Card.Body>             
            <Card.Title><b>{this.props.gpu.brand}</b></Card.Title>
            <Card.Subtitle>
              {this.props.gpu.name} 
              <br></br>
              {this.props.gpu.price}
              <br></br>
              {this.props.gpu.clockspeed}
              <br></br>
              {this.props.gpu.memory}
            </Card.Subtitle>        
          </Card.Body>
          <Button variant="primary">Click To Buy</Button>
        </Card>
      </div>
    )
  }
}

export default GpuInstance;