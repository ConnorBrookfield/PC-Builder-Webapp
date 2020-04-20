import React from 'react';
import Card from 'react-bootstrap/Card';

import '../App.css';

class GpuInstance extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div>
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
          </Card>
      </div>
    )
  }
}

export default GpuInstance;