import React from 'react';
import Card from 'react-bootstrap/Card';

import '../App.css';

class CoolerInstance extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div>
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
          </Card>
      </div>
    )
  }
}

export default CoolerInstance;