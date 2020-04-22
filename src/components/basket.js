import React from 'react';
import '../App.css';
import axios from "axios";
import { CardDeck, Card, Button } from 'react-bootstrap';

//setup page so when button is clicked it sends it to db in server that the basket recieves that data and outputs to page
class Basket extends React.Component{
  constructor(props){
    super(props);
    
    // Variables
    this.state = {
      case: {},
      motherboard: {},
      cpu: {},
      ram: {},
      gpu: {},
      cooler: {},
      storage: {},
      psu: {}
    };

    // Method Declaration
    this.removeFromBasket = this.removeFromBasket.bind(this);
}

// Remove Basket Method
  removeFromBasket(e){
    sessionStorage.removeItem(e.target.id);
    alert("Item removed from Basket!");
    this.props.history.push('/buildPc');
  }

  componentDidMount() {
    // Variables
    var caseId = sessionStorage.getItem('selectedCase');
    var motherboardId = sessionStorage.getItem('selectedMotherboard');
    var cpuId = sessionStorage.getItem('selectedCpu');
    var ramId = sessionStorage.getItem('selectedRam');
    var gpuId = sessionStorage.getItem('selectedGpu');
    var coolerId = sessionStorage.getItem('selectedCooler');
    var storageId = sessionStorage.getItem('selectedStorage');
    var psuId = sessionStorage.getItem('selectedPsu');

    // Checking if Object ID's have been passed, if not, give error, and send back to buildPC
    if (caseId == null || motherboardId == null ||
      cpuId == null || ramId == null ||
      gpuId == null || coolerId == null ||
      storageId == null || psuId == null){
        this.props.history.push('/buildPc');
    }

    // Axios API request Methods
    axios.get('http://localhost:4000/api/cases/' + caseId)
    .then((response)=>{
        this.setState({case: response.data.cases})
        console.log(this.state.case);
    })
    .catch((error)=>{
        console.log(error);
    });

    axios.get('http://localhost:4000/api/motherboards/' + motherboardId)
    .then((response)=>{
        this.setState({motherboard: response.data.motherboards})
        console.log(this.state.motherboards);
    })
    .catch((error)=>{
        console.log(error);
    });

    axios.get('http://localhost:4000/api/cpus/' + cpuId)
    .then((response)=>{
        this.setState({cpu: response.data.cpus})
    })
    .catch((error)=>{
        console.log(error);
    });

    axios.get('http://localhost:4000/api/rams/' + ramId)
    .then((response)=>{
        this.setState({ram: response.data.rams})
    })
    .catch((error)=>{
        console.log(error);
    });

    axios.get('http://localhost:4000/api/gpus/' + gpuId)
    .then((response)=>{
        this.setState({gpu: response.data.gpus})
    })
    .catch((error)=>{
        console.log(error);
    }); 

    axios.get('http://localhost:4000/api/coolers/' + coolerId)
    .then((response)=>{
        this.setState({cooler: response.data.coolers})
    })
    .catch((error)=>{
        console.log(error);
    });
    
    axios.get('http://localhost:4000/api/storages/' + storageId)
    .then((response)=>{
        this.setState({storage: response.data.storages})
    })
    .catch((error)=>{
        console.log(error);
    });
    axios.get('http://localhost:4000/api/psus/' + psuId)
    .then((response)=>{
        this.setState({psu: response.data.psus})
    })
    .catch((error)=>{
        console.log(error);
    });
}

  render(){
    return(
      <div>
        <h1>Your Basket</h1>
        <div class="bodyFormat">
          <div class="mx-auto justify-content-center">
            {/* Card Deck, with the Cards displayed from locally stored object id's,
            that were added to basket */}
            <CardDeck>
              <div class="mx-auto justify-content-center">
                <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "28rem" }}>
                  <h1>Case</h1>
                  <Card.Img variant="top" height="200" width="200" src={this.state.case.artwork}/>
                  <Card.Body>             
                    <Card.Title><b>{this.state.case.brand}</b></Card.Title>
                    <Card.Subtitle>
                      {this.state.case.name} 
                      <br></br>
                      {this.state.case.price}
                      <br></br>
                      {this.state.case.size}
                    </Card.Subtitle>        
                  </Card.Body>
                  <Button variant="primary" id="selectedCase" value={this.state.case._id} onClick={this.removeFromBasket}>Remove Item</Button>
                </Card>
              </div>
              <div class="mx-auto justify-content-center">
                <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "28rem" }}>
                  <h1>Motherboard</h1>
                  <Card.Img variant="top" height="200" width="200" src={this.state.motherboard.artwork}/>
                  <Card.Body>             
                    <Card.Title><b>{this.state.motherboard.brand}</b></Card.Title>
                    <Card.Subtitle>
                      {this.state.motherboard.name} 
                      <br></br>
                      {this.state.motherboard.price}
                      <br></br>
                      {this.state.motherboard.size}
                    </Card.Subtitle>        
                  </Card.Body>
                  <Button variant="primary" id="selectedMotherboard" value={this.state.motherboard._id} onClick={this.removeFromBasket}>Remove Item</Button>
                </Card>
              </div>        
              <div class="mx-auto justify-content-center">
                <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "28rem" }}>
                  <h1>CPU</h1>
                  <Card.Img variant="top" height="200" width="200" src={this.state.cpu.artwork}/>
                  <Card.Body>             
                    <Card.Title><b>{this.state.cpu.brand}</b></Card.Title>
                    <Card.Subtitle>
                      {this.state.cpu.name} 
                      <br></br>
                      {this.state.cpu.price}
                      <br></br>
                      {this.state.cpu.clockspeed}
                      <br></br>
                      {this.state.cpu.cores}
                      <br></br>
                      {this.state.cpu.socket}
                    </Card.Subtitle>        
                  </Card.Body>
                  <Button variant="primary" id="selectedCpu" value={this.state.cpu._id} onClick={this.removeFromBasket}>Remove Item</Button>
                </Card>
              </div>
              <div class="mx-auto justify-content-center">
                <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "28rem" }}>
                  <h1>RAM</h1>
                  <Card.Img variant="top" height="200" width="200" src={this.state.ram.artwork}/>
                  <Card.Body>             
                    <Card.Title><b>{this.state.ram.brand}</b></Card.Title>
                    <Card.Subtitle>
                      {this.state.ram.name} 
                      <br></br>
                      {this.state.ram.price}
                      <br></br>
                      {this.state.ram.clockspeed}
                      <br></br>
                      {this.state.ram.cores}
                      <br></br>
                      {this.state.ram.socket}
                    </Card.Subtitle>        
                  </Card.Body>
                  <Button variant="primary" id="selectedRam" value={this.state.ram._id} onClick={this.removeFromBasket}>Remove Item</Button>
                </Card>
              </div>
              <div class="mx-auto justify-content-center">
                <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "28rem" }}>
                  <h1>Gpu</h1>
                  <Card.Img variant="top" height="200" width="200" src={this.state.gpu.artwork}/>
                  <Card.Body>             
                    <Card.Title><b>{this.state.gpu.brand}</b></Card.Title>
                    <Card.Subtitle>
                      {this.state.gpu.name} 
                      <br></br>
                      {this.state.gpu.price}
                      <br></br>
                      {this.state.gpu.clockspeed}
                      <br></br>
                      {this.state.gpu.memory}
                    </Card.Subtitle>        
                  </Card.Body>
                  <Button variant="primary" id="selectedGpu" value={this.state.gpu._id} onClick={this.removeFromBasket}>Remove Item</Button>
                </Card>
              </div>
              <div class="mx-auto justify-content-center">
                <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "28rem" }}>
                  <h1>Cooler</h1>
                  <Card.Img variant="top" height="200" width="200" src={this.state.cooler.artwork}/>
                  <Card.Body>             
                    <Card.Title><b>{this.state.cooler.brand}</b></Card.Title>
                    <Card.Subtitle>
                      {this.state.cooler.name} 
                      <br></br>
                      {this.state.cooler.price}
                      <br></br>
                      {this.state.cooler.type}
                    </Card.Subtitle>        
                  </Card.Body>
                  <Button variant="primary" id="selectedCooler" value={this.state.cooler._id} onClick={this.removeFromBasket}>Remove Item</Button>
                </Card>
              </div>
              <div class="mx-auto justify-content-center">
                <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "28rem" }}>
                  <h1>PSU</h1>
                  <Card.Img variant="top" height="200" width="200" src={this.state.psu.artwork}/>
                  <Card.Body>             
                    <Card.Title><b>{this.state.psu.brand}</b></Card.Title>
                    <Card.Subtitle>
                      {this.state.psu.name} 
                      <br></br>
                      {this.state.psu.price}
                      <br></br>
                      {this.state.psu.type}
                      <br></br>
                      {this.state.psu.watts}
                    </Card.Subtitle>        
                  </Card.Body>
                  <Button variant="primary" id="selectedPsu" value={this.state.psu._id} onClick={this.removeFromBasket}>Remove Item</Button>
                </Card>
              </div>
              <div class="mx-auto justify-content-center">
                <Card className="bg-dark m-5" border="primary" style={{ width: '15.000rem', height: "28rem" }}>
                  <h1>Storage</h1>
                  <Card.Img variant="top" height="200" width="200" src={this.state.storage.artwork}/>
                  <Card.Body>             
                    <Card.Title><b>{this.state.storage.brand}</b></Card.Title>
                    <Card.Subtitle>
                      {this.state.storage.name} 
                      <br></br>
                      {this.state.storage.price}
                      <br></br>
                      {this.state.storage.type}
                      <br></br>
                      {this.state.storage.capacity}
                    </Card.Subtitle>        
                  </Card.Body>
                  <Button variant="primary" id="selectedStorage" value={this.state.storage._id} onClick={this.removeFromBasket}>Remove Item</Button>
                </Card>
              </div>
            </CardDeck>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default Basket;