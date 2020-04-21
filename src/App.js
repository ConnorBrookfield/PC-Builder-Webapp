import React from 'react';
import Home from './components/home';
import About from './components/about';
import BuildPC from './components/buildPC';
import Contact from './components/contact';
import AdminPanel from './components/adminPanel';
import Query from './components/query';
import Login from './components/login';
import ForumPage from './components/forumPage';
import Basket from './components/basket';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar className="navbar-dark navBarOpacity" sticky="top">
        <a class="navbar-brand" href="/">PcBuilderPro</a>
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/buildPC">Build a PC</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Contact Us">
            <NavDropdown.Item href="/query">Query Page</NavDropdown.Item>
            <NavDropdown.Item href="/forumPage">Forum Page</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/basket">Basket</Nav.Link>
          </Nav>
        </Navbar>
        <br/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/buildPC' component={BuildPC}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/adminPanel' component={AdminPanel}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/query' component={Query}/>
          <Route exact path='/forumPage' component={ForumPage}/>
          <Route exact path='/basket' component={Basket}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;