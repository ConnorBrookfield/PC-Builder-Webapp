import React from 'react';
import BasketCase from "./basketCase";
import Motherboards from "./motherboards";
import Cpus from "./cpus";
import Rams from "./rams";
import Gpus from "./gpus";
import Coolers from "./coolers";
import Storages from "./storages";
import Psus from "./psus";
import '../App.css';
import axios from "axios";
import { CardDeck } from 'react-bootstrap';

//setup page so when button is clicked it sends it to db in server that the basket recieves that data and outputs to page
class Basket extends React.Component{

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

  componentDidMount() {
    var caseId= sessionStorage.getItem('selectedCase');
    var motherboardId= sessionStorage.getItem('selectedMotherboard');
    var cpuId= sessionStorage.getItem('selectedCpu');
    var ramId= sessionStorage.getItem('selectedRam');
    var gpuId= sessionStorage.getItem('selectedGpu');
    var coolerId= sessionStorage.getItem('selectedCooler');
    var storageId= sessionStorage.getItem('selectedStorage');
    var psuId= sessionStorage.getItem('selectedPsu');

    axios.get('http://localhost:4000/api/cases/' + caseId)
    .then((response)=>{
        this.setState({cases: response.data.cases})
    })
    .catch((error)=>{
        console.log(error);
    });

    alert(this.state.cpus);

    axios.get('http://localhost:4000/api/motherboards/' + motherboardId)
    .then((response)=>{
        this.setState({motherboards: response.data.motherboards})
    })
    .catch((error)=>{
        console.log(error);
    });

    axios.get('http://localhost:4000/api/cpus/' + cpuId)
    .then((response)=>{
        this.setState({cpus: response.data.cpus})
    })
    .catch((error)=>{
        console.log(error);
    });

    axios.get('http://localhost:4000/api/rams/' + ramId)
    .then((response)=>{
        this.setState({rams: response.data.rams})
    })
    .catch((error)=>{
        console.log(error);
    });

    axios.get('http://localhost:4000/api/gpus/' + gpuId)
    .then((response)=>{
        this.setState({gpus: response.data.gpus})
    })
    .catch((error)=>{
        console.log(error);
    }); 

    axios.get('http://localhost:4000/api/coolers/' + coolerId)
    .then((response)=>{
        this.setState({coolers: response.data.coolers})
    })
    .catch((error)=>{
        console.log(error);
    });
    
    axios.get('http://localhost:4000/api/storages/' + storageId)
    .then((response)=>{
        this.setState({storages: response.data.storages})
    })
    .catch((error)=>{
        console.log(error);
    });
    axios.get('http://localhost:4000/api/psus/' + psuId)
    .then((response)=>{
        this.setState({psus: response.data.psus})
    })
    .catch((error)=>{
        console.log(error);
    });
}

  render(){
    return(
      <div><h1>Your Basket</h1>
        <div class="bodyFormat">
          <br></br>
          <h1>Cases</h1>
          <CardDeck>
            <BasketCase key={this.state.cases.caseId} ReloadDataMethod={this.ReloadDataMethod}></BasketCase>              
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
        </div>
      </div>
    )
  }
}

export default Basket;