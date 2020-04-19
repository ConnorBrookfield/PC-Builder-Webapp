import React from 'react';
import Home from './components/home';
import About from './components/about';
import BuildPC from './components/buildPC';
import Contact from './components/contact';
import AdminPanel from './components/adminPanel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar className="navbar-dark navBarOpacity">
        <a class="navbar-brand" href="/">PcBuilderPro</a>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/buildPC">Build a PC</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/adminPanel">ADMIN PANEL *REMOVE*</Nav.Link>
          </Nav>
        </Navbar>
        <br/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/buildPC' component={BuildPC}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/adminPanel' component={AdminPanel}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;