import React from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';

class AdminPanel extends React.Component {
  constructor(props){
    super(props);

    this.state = { Brand:"", Name:"", Price:"", Size:"", Cores:"", Capacity:"", Clockspeed:"", Memory:"", Type: "", Watts:"", Artwork:""};

    this.dropDownOptions = ["caseInput", "cpuInput", "motherboardInput", "gpuInput", "psuInput", "ramInput", "storageInput", "coolingInput"];

    // Handle Methods - Submits
    this.handleCaseSubmit = this.handleCaseSubmit.bind(this);
    this.handleCpuSubmit = this.handleCpuSubmit.bind(this);
    this.handleMotherboardSubmit = this.handleMotherboardSubmit.bind(this);
    this.handleGpuSubmit = this.handleGpuSubmit.bind(this);
    this.handlePsuSubmit = this.handlePsuSubmit.bind(this);
    this.handleRamSubmit = this.handleRamSubmit.bind(this);
    this.handleStorageSubmit = this.handleStorageSubmit.bind(this);
    this.handleCoolerSubmit = this.handleCoolerSubmit.bind(this);


    // Handle Methods - Variables
    this.handleBrandChange = this.handleBrandChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleArtworkChange = this.handleArtworkChange.bind(this);
    this.handleCapacityChange = this.handleCapacityChange.bind(this);
    this.handleClockspeedChange = this.handleClockspeedChange.bind(this);
    this.handleCoresChange = this.handleCoresChange.bind(this);
    this.handleSocketChange = this.handleSocketChange.bind(this);
    this.handleMemoryChange = this.handleMemoryChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleWattChange = this.handleWattChange.bind(this);

    // Toggle Methods
    this.togglePcCase = this.togglePcCase.bind(this);
    this.toggleCpu = this.toggleCpu.bind(this);
    this.toggleMotherboard = this.toggleMotherboard.bind(this);
    this.toggleGpu = this.toggleGpu.bind(this);
    this.togglePsu = this.togglePsu.bind(this);
    this.toggleRam = this.toggleRam.bind(this);
    this.toggleStorage = this.toggleStorage.bind(this);
    this.toggleCooling = this.toggleCooling.bind(this);
  }

  //Methods for setting variables to user input
  handleBrandChange(e){
    this.setState({Brand: e.target.value});
  }
  handleNameChange(e){
    this.setState({Name: e.target.value});
  }
  handlePriceChange(e){
    this.setState({Price: e.target.value});
  }
  handleSizeChange(e){
    this.setState({Size: e.target.value});
  }
  handleArtworkChange(e){
    this.setState({Artwork: e.target.value});
  }
  handleCoresChange(e){
    this.setState({Cores: e.target.value});
  }
  handleCapacityChange(e){
    this.setState({Capacity: e.target.value});
  }
  handleClockspeedChange(e){
    this.setState({Clockspeed: e.target.value});
  }
  handleSocketChange(e){
    this.setState({Socket: e.target.value});
  }
  handleMemoryChange(e){
    this.setState({Memory: e.target.value});
  }
  handleTypeChange(e){
    this.setState({Type: e.target.value});
  }
  handleWattChange(e){
    this.setState({Watts: e.target.value});
  }

  // Handle Submit Methods
  handleCaseSubmit(e){
    e.preventDefault();
    
    const newCase = {
      brand: this.state.Brand,
      name: this.state.Name,
      price: this.state.Price,
      size: this.state.Size,
      artwork: this.state.Artwork
    };

    //Posts the request to the server, with the newly created Case
    axios.post('http://localhost:4000/api/cases', newCase) 
    .then()
    .catch();

    this.setState({ Brand:"", Name:"", Price:"", Size:"", Artwork:"" });    
  }
  handleCpuSubmit(e){
    e.preventDefault();
    
    const newCpu = {
      brand: this.state.Brand,
      name: this.state.Name,
      price: this.state.Price,
      clockspeed: this.state.Clockspeed,
      cores: this.state.Cores,
      socket: this.state.Socket,
      artwork: this.state.Artwork
    };

    //Posts the request to the server, with the newly created Case
    axios.post('http://localhost:4000/api/cpus', newCpu) 
    .then()
    .catch();

    this.setState({ Brand:"", Name:"", Price:"", Clockspeed:"", Cores:"", Socket:"", Artwork:"" });    
  }
  handleMotherboardSubmit(e){
    e.preventDefault();
    
    const newMotherboard = {
      brand: this.state.Brand,
      name: this.state.Name,
      price: this.state.Price,
      size: this.state.Size,
      artwork: this.state.Artwork
    };

    //Posts the request to the server, with the newly created Case
    axios.post('http://localhost:4000/api/motherboards', newMotherboard) 
    .then()
    .catch();

    this.setState({ Brand:"", Name:"", Price:"", Size:"", Artwork:"" });    
  }
  handleGpuSubmit(e){
    e.preventDefault();
    
    const newGpu = {
      brand: this.state.Brand,
      name: this.state.Name,
      price: this.state.Price,
      clockspeed: this.state.Clockspeed,
      memory: this.state.Memory,
      artwork: this.state.Artwork
    };

    //Posts the request to the server, with the newly created Case
    axios.post('http://localhost:4000/api/gpus', newGpu) 
    .then()
    .catch();

    this.setState({ Brand:"", Name:"", Price:"", Clockspeed:"", Memory:"", Artwork:"" });    
  }
  handlePsuSubmit(e){
    e.preventDefault();
    
    const newPsu = {
      brand: this.state.Brand,
      name: this.state.Name,
      price: this.state.Price,
      type: this.state.Type,
      watts: this.state.Watts,
      artwork: this.state.Artwork
    };

    //Posts the request to the server, with the newly created Case
    axios.post('http://localhost:4000/api/psus', newPsu) 
    .then()
    .catch();

    this.setState({ Brand:"", Name:"", Price:"", Type:"", Watts:"", Artwork:"" });    
  }
  handleRamSubmit(e){
    e.preventDefault();
    
    const newRam = {
      brand: this.state.Brand,
      name: this.state.Name,
      price: this.state.Price,
      clockspeed: this.state.Clockspeed,
      memory: this.state.Memory,
      artwork: this.state.Artwork
    };

    //Posts the request to the server, with the newly created Case
    axios.post('http://localhost:4000/api/rams', newRam) 
    .then()
    .catch();

    this.setState({ Brand:"", Name:"", Price:"", Clockspeed:"", Memory:"", Artwork:"" });    
  }
  handleStorageSubmit(e){
    e.preventDefault();
    
    const newStorage = {
      brand: this.state.Brand,
      name: this.state.Name,
      price: this.state.Price,
      type: this.state.Type,
      capacity: this.state.Capacity,
      artwork: this.state.Artwork
    };

    //Posts the request to the server, with the newly created Case
    axios.post('http://localhost:4000/api/storages', newStorage) 
    .then()
    .catch();

    this.setState({ Brand:"", Name:"", Price:"", Type:"", Capacity:"", Artwork:"" });    
  }
  handleCoolerSubmit(e){
    e.preventDefault();
    
    const newCooler = {
      brand: this.state.Brand,
      name: this.state.Name,
      price: this.state.Price,
      type: this.state.Type,
      artwork: this.state.Artwork
    };

    //Posts the request to the server, with the newly created Case
    axios.post('http://localhost:4000/api/coolers', newCooler) 
    .then()
    .catch();

    this.setState({ Brand:"", Name:"", Price:"", Type:"", Artwork:"" });    
  }

  // Dropdown Menu functions
  togglePcCase() {
    // Setting all items to hidden (for loop won't work with )
    for(var i = 0; i < 8; i++){
      document.getElementById(this.dropDownOptions[i]).hidden = true;
    }
    
    // Changes currentState value
    document.getElementById("caseInput").hidden = false;
  }

  toggleCpu() {
    // Setting all items to hidden
    for(var i = 0; i < 8; i++){
      document.getElementById(this.dropDownOptions[i]).hidden = true;
    }

    // Changes currentState value
    document.getElementById("cpuInput").hidden = false;
  }

  toggleMotherboard() {
    // Setting all items to hidden
    for(var i = 0; i < 8; i++){
      document.getElementById(this.dropDownOptions[i]).hidden = true;
    }

    // Changes currentState value
    document.getElementById("motherboardInput").hidden = false;
  }

  toggleGpu() {
    // Setting all items to hidden
    for(var i = 0; i < 8; i++){
      document.getElementById(this.dropDownOptions[i]).hidden = true;
    }

    // Changes currentState value
    document.getElementById("gpuInput").hidden = false;
  }

  togglePsu() {
    // Setting all items to hidden
    for(var i = 0; i < 8; i++){
      document.getElementById(this.dropDownOptions[i]).hidden = true;
    }

    // Changes currentState value
    document.getElementById("psuInput").hidden = false;
  }

  toggleRam() {
    // Setting all items to hidden
    for(var i = 0; i < 8; i++){
      document.getElementById(this.dropDownOptions[i]).hidden = true;
    }

    // Changes currentState value
    document.getElementById("ramInput").hidden = false;
  }

  toggleStorage() {
    // Setting all items to hidden
    for(var i = 0; i < 8; i++){
      document.getElementById(this.dropDownOptions[i]).hidden = true;
    }

    // Changes currentState value
    document.getElementById("storageInput").hidden = false;
  }

  toggleCooling() {
    // Setting all items to hidden
    for(var i = 0; i < 8; i++){
      document.getElementById(this.dropDownOptions[i]).hidden = true;
    }

    // Changes currentState value
    document.getElementById("coolingInput").hidden = false;
  }

// Render Method
  render() {
    return (
      <div>
        <h1><b>AdminPanel</b></h1>
        <div class="bodyFormat">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Add a Component!
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropDownMenu">
              <Dropdown.Item onSelect={this.togglePcCase}>Case</Dropdown.Item>
              <Dropdown.Item onSelect={this.toggleCpu}>Cpu</Dropdown.Item>
              <Dropdown.Item onSelect={this.toggleMotherboard}>Motherboard</Dropdown.Item>
              <Dropdown.Item onSelect={this.togglePsu}>Power Supply</Dropdown.Item>
              <Dropdown.Item onSelect={this.toggleRam}>Ram</Dropdown.Item>
              <Dropdown.Item onSelect={this.toggleGpu}>Gpu</Dropdown.Item>
              <Dropdown.Item onSelect={this.toggleCooling}>Cooling</Dropdown.Item>
              <Dropdown.Item onSelect={this.toggleStorage}>Storage</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div id="caseInput" hidden="true">
            <h1>Add a new Case!</h1>
            <div class="centerElement">
              <Form onSubmit={this.handleCaseSubmit}>
                <Form.Group>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="input" value={this.state.Brand} onChange={this.handleBrandChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="input" value={this.state.Name} onChange={this.handleNameChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control as="input" value={this.state.Price} onChange={this.handlePriceChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Size</Form.Label>
                  <Form.Control as="input" value={this.state.Size} onChange={this.handleSizeChange}/>
                </Form.Group>            
                <Form.Group>
                  <Form.Label>Artwork</Form.Label>
                  <Form.Control as="input" value={this.state.Artwork} onChange={this.handleArtworkChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Add Case</Button>
              </Form>
            </div>
          </div>
          <div id="cpuInput" hidden="true">
            <h1>Add a new CPU!</h1>
            <div class="centerElement">
              <Form onSubmit={this.handleCpuSubmit}>
                <Form.Group>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="input" value={this.state.Brand} onChange={this.handleBrandChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="input" value={this.state.Name} onChange={this.handleNameChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control as="input" value={this.state.Price} onChange={this.handlePriceChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Clockspeed</Form.Label>
                  <Form.Control as="input" value={this.state.Clockspeed} onChange={this.handleClockspeedChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Cores</Form.Label>
                  <Form.Control as="input" value={this.state.Cores} onChange={this.handleCoresChange}/>
                </Form.Group>   
                <Form.Group>
                  <Form.Label>Socket</Form.Label>
                  <Form.Control as="input" value={this.state.Socket} onChange={this.handleSocketChange}/>
                </Form.Group>               
                <Form.Group>
                  <Form.Label>Artwork</Form.Label>
                  <Form.Control as="input" value={this.state.Artwork} onChange={this.handleArtworkChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Add Cpu</Button>
                <br/>
              </Form>
            </div>
          </div>          
          <div id="motherboardInput" hidden="true">
            <h1>Add a new Motherboard!</h1>
            <div class="centerElement">
              <Form onSubmit={this.handleMotherboardSubmit}>
                <Form.Group>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="input" value={this.state.Brand} onChange={this.handleBrandChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="input" value={this.state.Name} onChange={this.handleNameChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control as="input" value={this.state.Price} onChange={this.handlePriceChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Size</Form.Label>
                  <Form.Control as="input" value={this.state.Size} onChange={this.handleSizeChange}/>
                </Form.Group>       
                <Form.Group>
                  <Form.Label>Artwork</Form.Label>
                  <Form.Control as="input" value={this.state.Artwork} onChange={this.handleArtworkChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Add Motherboard</Button>
                <br/>
              </Form>
            </div>
          </div>
          <div id="gpuInput" hidden="true">
            <h1>Add a new Graphics Card!</h1>
            <div class="centerElement">
              <Form onSubmit={this.handleGpuSubmit}>
                <Form.Group>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="input" value={this.state.Brand} onChange={this.handleBrandChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="input" value={this.state.Name} onChange={this.handleNameChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control as="input" value={this.state.Price} onChange={this.handlePriceChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Clockspeed</Form.Label>
                  <Form.Control as="input" value={this.state.Clockspeed} onChange={this.handleClockspeedChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Memory</Form.Label>
                  <Form.Control as="input" value={this.state.Memory} onChange={this.handleMemoryChange}/>
                </Form.Group>              
                <Form.Group>
                  <Form.Label>Artwork</Form.Label>
                  <Form.Control as="input" value={this.state.Artwork} onChange={this.handleArtworkChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Add Gpu</Button>
                <br/>
              </Form>
            </div>
          </div>   
          <div id="psuInput" hidden="true">
            <h1>Add a new Power Supply!</h1>
            <div class="centerElement">
              <Form onSubmit={this.handlePsuSubmit}>
                <Form.Group>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="input" value={this.state.Brand} onChange={this.handleBrandChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="input" value={this.state.Name} onChange={this.handleNameChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control as="input" value={this.state.Price} onChange={this.handlePriceChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Type</Form.Label>
                  <Form.Control as="input" value={this.state.Type} onChange={this.handleTypeChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Watts</Form.Label>
                  <Form.Control as="input" value={this.state.Watts} onChange={this.handleWattChange}/>
                </Form.Group>              
                <Form.Group>
                  <Form.Label>Artwork</Form.Label>
                  <Form.Control as="input" value={this.state.Artwork} onChange={this.handleArtworkChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Add Power Supply</Button>
                <br/>
              </Form>
            </div>      
          </div>   
          <div id="ramInput" hidden="true">
            <h1>Add Ram!</h1>
            <div class="centerElement">
              <Form onSubmit={this.handleRamSubmit}>
                <Form.Group>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="input" value={this.state.Brand} onChange={this.handleBrandChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="input" value={this.state.Name} onChange={this.handleNameChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control as="input" value={this.state.Price} onChange={this.handlePriceChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Clockspeed</Form.Label>
                  <Form.Control as="input" value={this.state.Clockspeed} onChange={this.handleClockspeedChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Memory</Form.Label>
                  <Form.Control as="input" value={this.state.Memory} onChange={this.handleMemoryChange}/>
                </Form.Group>              
                <Form.Group>
                  <Form.Label>Artwork</Form.Label>
                  <Form.Control as="input" value={this.state.Artwork} onChange={this.handleArtworkChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Add Ram</Button>
                <br/>
              </Form>
            </div>
          </div>   
          <div id="storageInput" hidden="true">
            <h1>Add a new Storage Device!</h1>
            <div class="centerElement">
              <Form onSubmit={this.handleStorageSubmit}>
                <Form.Group>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="input" value={this.state.Brand} onChange={this.handleBrandChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="input" value={this.state.Name} onChange={this.handleNameChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control as="input" value={this.state.Price} onChange={this.handlePriceChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Type</Form.Label>
                  <Form.Control as="input" value={this.state.Type} onChange={this.handleTypeChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Capacity</Form.Label>
                  <Form.Control as="input" value={this.state.Capacity} onChange={this.handleCapacityChange}/>
                </Form.Group>              
                <Form.Group>
                  <Form.Label>Artwork</Form.Label>
                  <Form.Control as="input" value={this.state.Artwork} onChange={this.handleArtworkChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Add Storage Device</Button>
                <br/>
              </Form>
            </div>
          </div>   
          <div id="coolingInput" hidden="true">
            <h1>Add a new Cooler!</h1>
            <div class="centerElement">
              <Form onSubmit={this.handleCoolerSubmit}>
                <Form.Group>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="input" value={this.state.Brand} onChange={this.handleBrandChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="input" value={this.state.Name} onChange={this.handleNameChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control as="input" value={this.state.Price} onChange={this.handlePriceChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Type</Form.Label>
                  <Form.Control as="input" value={this.state.Type} onChange={this.handleTypeChange}/>
                </Form.Group>            
                <Form.Group>
                  <Form.Label>Artwork</Form.Label>
                  <Form.Control as="input" value={this.state.Artwork} onChange={this.handleArtworkChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Add Cooler</Button>
                <br/>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
