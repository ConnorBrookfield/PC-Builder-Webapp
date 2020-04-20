import React from 'react';
import Cases from "./cases";
import Motherboards from "./motherboards";
import Cpus from "./cpus";
import Rams from "./rams";
import Gpus from "./gpus";
import Coolers from "./coolers";
import Storages from "./storages";
import '../App.css';
import axios from "axios";
import { CardDeck } from 'react-bootstrap';

class BuildPC extends React.Component{

  state = {
    cases: [],
    motherboards: [],
    cpus: [],
    rams: [],
    gpus: [],
    coolers: [],
    storages: []
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

    axios.get('http://localhost:4000/api/rams')
    .then((response)=>{
        this.setState({rams: response.data.rams})
    })
    .catch((error)=>{
        console.log(error);
    });

    axios.get('http://localhost:4000/api/gpus')
    .then((response)=>{
        this.setState({gpus: response.data.gpus})
    })
    .catch((error)=>{
        console.log(error);
    }); 

    axios.get('http://localhost:4000/api/coolers')
    .then((response)=>{
        this.setState({coolers: response.data.coolers})
    })
    .catch((error)=>{
        console.log(error);
    });
    
    axios.get('http://localhost:4000/api/storages')
    .then((response)=>{
        this.setState({storages: response.data.storages})
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
          <h2>RAM'S</h2>  
          <CardDeck>
            <Rams theRams={this.state.rams} ReloadDataMethod={this.ReloadDataMethod}></Rams>              
          </CardDeck> 
          <h2>GPU'S</h2>
          <CardDeck>
            <Gpus theGpus={this.state.gpus} ReloadDataMethod={this.ReloadDataMethod}></Gpus>              
          </CardDeck>
          <h2>COOLER'S</h2>
          <CardDeck>
            <Coolers theCoolers={this.state.coolers} ReloadDataMethod={this.ReloadDataMethod}></Coolers>              
          </CardDeck>
          <h2>STORAGES</h2>
          <CardDeck>
            <Storages theStorages={this.state.storages} ReloadDataMethod={this.ReloadDataMethod}></Storages>              
          </CardDeck>
      </div>
    )
  }
}

export default BuildPC;