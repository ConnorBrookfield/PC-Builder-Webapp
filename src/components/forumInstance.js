import React from 'react';
import Card from 'react-bootstrap/Card';

import '../App.css';

class ForumInstance extends React.Component{

render(){
    return(
        <div class="mx-auto justify-content-center">
            <Card className="bg-dark m-4" border="primary">
                <Card.Body>             
                    <Card.Title>Query:<i><br></br>{this.props.forum.feedback}</i></Card.Title>
                    <br></br>
                    <Card.Subtitle>Email: {this.props.forum.email}</Card.Subtitle>
                    <br></br> 
                    <Card.Text>From: {this.props.forum.name} </Card.Text>          
                </Card.Body>
            </Card>
        </div>
        
      )
    }
}

export default ForumInstance;