import React from 'react';
import Forums from "./forums";
import '../App.css';
import axios from "axios";
import { CardDeck } from 'react-bootstrap';


class ForumPage extends React.Component{

  state = {
      forums: []
  }

  componentDidMount() {
      axios.get('http://localhost:4000/api/forums')
      .then((response)=>{
          this.setState({forums: response.data.forums})
      })
      .catch((error)=>{
          console.log(error);
      });
  }

  render(){
      return(
        <div>
          <h1>Forum Page!</h1>
          <h2>Welcome to the Forum page where your Querys are recieved for the community to see!!</h2>
          <div class="bodyFormat">
           
            <Forums theForums={this.state.forums} ReloadDataMethod={this.ReloadDataMethod}></Forums>
            
          </div>
        </div>
      )
    }
}

export default ForumPage;