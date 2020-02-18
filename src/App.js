import React from 'react';
// import DefaultAlbumsLibrary from "./components/defaultAlbumsLibrary";
// import AddAlbum from './components/addAlbum';
// import EditAlbum from "./components/editAlbum";
// import AlbumsLibrary from './components/albumsLibrary';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar className="navbar-dark bg-dark">
        <a class="navbar-brand" href="/">PcBuilderPro</a>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/buildPC">Build a PC</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar>
        <br/>
        <Switch>
          {/* <Route exact path='/' component={DefaultAlbumsLibrary}/>
          <Route exact path='/addAlbum' component={AddAlbum}/>
          <Route exact path='/albumsLibrary' component={AlbumsLibrary}/>
          <Route exact path='/editAlbum/:id' component={EditAlbum}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;