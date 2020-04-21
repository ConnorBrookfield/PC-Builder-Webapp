import React from 'react';
import Card from 'react-bootstrap/Card';

import '../App.css';

class ForumInstance extends React.Component{

constructor(){
    super();
}

render(){
    return(
<div>
      <br></br>
      {this.props.forum.name} 
      <br></br>
      {this.props.forum.email}
      <br></br>
      {this.props.forum.feedback}

            
</div>
        
      )
    }
}

export default ForumInstance;