import React from 'react';
import Cases from "./cases";
import Motherboards from "./motherboards";
import Cpus from "./cpus";
import Rams from "./rams";
import Gpus from "./gpus";
import Coolers from "./coolers";
import Storages from "./storages";
import Psus from "./psus";
import '../App.css';
import axios from "axios";
import { CardDeck, Button } from 'react-bootstrap';

class BuildPC extends React.Component{

  state = {
    cases: [],
    motherboards: [],
    cpus: [],
    rams: [],
    gpus: [],
    coolers: [],
    storages: [],
    psus: []
  };






  topFunction() {
    document.body.scrollTop = 0;
  }

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
    axios.get('http://localhost:4000/api/psus')
    .then((response)=>{
        this.setState({psus: response.data.psus})
    })
    .catch((error)=>{
        console.log(error);
    });
}

  render(){
    return(
      <div><h1>Welcome to the Build a PC page</h1>
      <a name="top"></a>
        <div class="bodyFormat">
          <br></br>
          <h1>Cases</h1>
          <CardDeck>
            <Cases theCases={this.state.cases} ReloadDataMethod={this.ReloadDataMethod}></Cases>              
          </CardDeck>
          <br></br>
          <h1>MotherBoards</h1>
          <CardDeck>
            <Motherboards theMotherboards={this.state.motherboards} ReloadDataMethod={this.ReloadDataMethod}></Motherboards>              
          </CardDeck>
          <br></br>
          <h1>CPU'S</h1>
          <CardDeck>
            <Cpus theCpus={this.state.cpus} ReloadDataMethod={this.ReloadDataMethod}></Cpus>              
          </CardDeck>
          <br></br>
          <h1>RAM Sticks</h1>  
          <CardDeck>
            <Rams theRams={this.state.rams} ReloadDataMethod={this.ReloadDataMethod}></Rams>              
          </CardDeck>
          <br></br> 
          <h1>Graphics Cards</h1>
          <CardDeck>
            <Gpus theGpus={this.state.gpus} ReloadDataMethod={this.ReloadDataMethod}></Gpus>              
          </CardDeck>
          <br></br>
          <h1>Cooling</h1>
          <CardDeck>
            <Coolers theCoolers={this.state.coolers} ReloadDataMethod={this.ReloadDataMethod}></Coolers>              
          </CardDeck>
          <br></br>
          <h1>Storage Devices</h1>
          <CardDeck>
            <Storages theStorages={this.state.storages} ReloadDataMethod={this.ReloadDataMethod}></Storages>              
          </CardDeck>
          <br></br>
          <h1>Power Supplies</h1>
          <CardDeck>
            <Psus thePsus={this.state.psus} ReloadDataMethod={this.ReloadDataMethod}></Psus>              
          </CardDeck>
          <Button href="#top">Back To Top</Button>
          <Button variant="primary" href="/basket">Go To Basket</Button>
        </div>
      </div>
    )
  }
}

export default BuildPC;