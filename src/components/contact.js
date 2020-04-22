import React from 'react';
import Forums from "./forums";
import '../App.css';
import axios from "axios";


class Contact extends React.Component{
// Variables
  state = {
      forums: []
  }

//Method called before render, gets thee forum data from the Express API
  componentDidMount() {
      axios.get('http://localhost:4000/api/forums')
      .then((response)=>{
          this.setState({forums: response.data.forums})
      })
      .catch((error)=>{
          console.log(error);
      });
  }

  // Displays
  render(){
      return(
        <div>
          <h1>Contact Us!</h1>
          <div class="bodyFormat">
            <Forums theForums={this.state.forums} ReloadDataMethod={this.ReloadDataMethod}></Forums>
          </div>
        </div>
      )
    }
}

export default Contact;