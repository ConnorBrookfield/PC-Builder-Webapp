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
import { CardDeck, Button, Alert} from 'react-bootstrap';

class BuildPC extends React.Component{

  constructor(){
    super();

    // Show AlertBar Method declaration
    this.showAlertBar = this.showAlertBar.bind(this);
  }
  componentWillUpdate()
  {
    // Checking if all components have a selected item, added to basket 
    if(sessionStorage.getItem("selectedCase") == null){
      this.chosenCase = "Case";
      this.showAlertBar();
    }
    if(sessionStorage.getItem("selectedPsu") == null){
      this.chosenPsu = "Psu";
      this.showAlertBar();
    }
    if(sessionStorage.getItem("selectedMotherboard") == null){
      this.chosenMotherboard = "Motherboard";
      this.showAlertBar();
    }
    if(sessionStorage.getItem("selectedCooler") == null){
      this.chosenCooler = "Cooler";
      this.showAlertBar();
    }
    if(sessionStorage.getItem("selectedCpu") == null){
      this.chosenCpu = "Cpu";
      this.showAlertBar();
    }
    if(sessionStorage.getItem("selectedGpu") == null){
      this.chosenGpu = "Gpu";
      this.showAlertBar();
    }
    if(sessionStorage.getItem("selectedStorage") == null){
      this.chosenStorage = "Storage";
      this.showAlertBar();
    }
    if(sessionStorage.getItem("selectedRam") == null){
      this.chosenRam = "Ram";
      this.showAlertBar();
    }
  }

  // showAlertBar Method Definition
  showAlertBar(e){
    document.getElementById("alertBar").hidden = false;
  }

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

  // ComponentDidMount Method is called first when the component/js page is loaded, before render
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
      <div height="100%" href="top">
        <Alert variant="primary" id="alertBar" hidden="true">{this.chosenCase}{this.chosenMotherboard}{this.chosenCpu}{this.chosenRam}{this.chosenGpu}{this.chosenCooler}{this.chosenStorage}{this.chosenPsu} is not chosen!</Alert>
        <h1>Welcome to the Build a PC page</h1>
        <div class="bodyFormat">
          <br></br>
          <h1>Cases</h1>
          <CardDeck>
            <Cases theCases={this.state.cases} ReloadDataMethod={this.ReloadDataMethod}></Cases>              
          </CardDeck>
          <h1>MotherBoards</h1>
          <CardDeck>
            <Motherboards theMotherboards={this.state.motherboards} ReloadDataMethod={this.ReloadDataMethod}></Motherboards>              
          </CardDeck>
          <h1>CPU'S</h1>
          <CardDeck>
            <Cpus theCpus={this.state.cpus} ReloadDataMethod={this.ReloadDataMethod}></Cpus>              
          </CardDeck>
          <h1>RAM Sticks</h1>  
          <CardDeck>
            <Rams theRams={this.state.rams} ReloadDataMethod={this.ReloadDataMethod}></Rams>              
          </CardDeck>
          <h1>Graphics Cards</h1>
          <CardDeck>
            <Gpus theGpus={this.state.gpus} ReloadDataMethod={this.ReloadDataMethod}></Gpus>              
          </CardDeck>
          <h1>Cooling</h1>
          <CardDeck>
            <Coolers theCoolers={this.state.coolers} ReloadDataMethod={this.ReloadDataMethod}></Coolers>              
          </CardDeck>
          <h1>Storage Devices</h1>
          <CardDeck>
            <Storages theStorages={this.state.storages} ReloadDataMethod={this.ReloadDataMethod}></Storages>              
          </CardDeck>
          <h1>Power Supplies</h1>
          <CardDeck>
            <Psus thePsus={this.state.psus} ReloadDataMethod={this.ReloadDataMethod}></Psus>              
          </CardDeck>
          <br></br>
          <Button href="#top" >Back To Top</Button>
          <Button variant="primary" href="/basket" sticky="top">Go To Basket</Button>
          <br></br><br></br>
        </div>
        <br></br><br></br>
      </div>
    )
  }
}

export default BuildPC;