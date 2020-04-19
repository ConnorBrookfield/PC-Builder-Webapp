import React from 'react';
import Cases from "./cases";
import Motherboards from "./motherboards";
import Cpus from "./cpus";
import '../App.css';
import axios from "axios";
import { CardDeck } from 'react-bootstrap';

class BuildPC extends React.Component{

  state = {
    cases: [],
    motherboards: [],
    cpus: []
  };

  componentDidMount() {
    axios.get('http://localhost:4000/api/cases')
    .then((response)=>{
        this.setState({cases: response.data.cases})
    })
    .catch((error)=>{
        console.log(error);
    });

    axios.get('http://localhost:4000/api/motherboards')
    .then((response)=>{
        this.setState({motherboards: response.data.motherboards})
    })
    .catch((error)=>{
        console.log(error);
    });

    axios.get('http://localhost:4000/api/cpus')
    .then((response)=>{
        this.setState({cpus: response.data.cpus})
    })
    .catch((error)=>{
        console.log(error);
    });
}

  render(){
    return(
      <div class="bodyFormat">
          <h1>Welcome to the Build a PC page</h1>
          <br></br>
          <h1>Cases</h1>
          <CardDeck>
            <Cases theCases={this.state.cases} ReloadDataMethod={this.ReloadDataMethod}></Cases>              
          </CardDeck>
          <h2>MotherBoards</h2>
          <CardDeck>
            <Motherboards theMotherboards={this.state.motherboards} ReloadDataMethod={this.ReloadDataMethod}></Motherboards>              
          </CardDeck>
          <h2>CPU'S</h2>
          <CardDeck>
            <Cpus theCpus={this.state.cpus} ReloadDataMethod={this.ReloadDataMethod}></Cpus>              
          </CardDeck>       
      </div>
    )
  }
}

export default BuildPC;