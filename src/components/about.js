import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { CardDeck, Card } from 'react-bootstrap';

class About extends React.Component{

  render(){
    return(
      <div>
        <h1>About Us!</h1>
          <h2>Here is some information about ourselves</h2>
          <div class="bodyFormat">
          <div class="centerElement">
          <CardDeck>
            <Card className="bg-dark m-5 justify-content-center" border="primary">
              <Card.Body>    
                <Card.Header><h2><b><i>Connor Brookfield</i></b></h2></Card.Header>
                <Card.Text>
                  <h3><i><b>Age:</b> 
                  <br></br>
                  21
                  <br></br><br></br>
                  <b>Birthday:</b>
                  <br></br>
                  20st Of August
                  <br></br><br></br>
                  <b>Personal Profile:</b>
                  <br></br>Connor is a Third Year Software Development student and a freelance Musician who loves music, programming, and gaming (new and old school).            
                  </i></h3>
                </Card.Text>
                <Card.Footer>
                  <Button href="https://github.com/G00361129" target="_blank">Connor's GitHub</Button>
                </Card.Footer>             
              </Card.Body>          
            </Card>
            <Card className="bg-dark m-5 justify-content-center" border="primary">
              <Card.Body>    
                <Card.Header><h3><b><i>Jack Haugh</i></b></h3></Card.Header>
                <Card.Text>
                <h3><i><b>Age:</b> 
                  <br></br>
                  22
                  <br></br><br></br>
                  <b>Birthday:</b>
                  <br></br>
                  21st Of August
                  <br></br><br></br>
                  <b>Personal Profile:</b>
                  <br></br>Jack is a Third Year Software Development student and a freelance DJ who loves music, rugby, gaming and darts.             
                  </i></h3>
                </Card.Text>
                <Card.Footer>
                  <Button href="https://github.com/JackH97" target="_blank" >Jacks's GitHub</Button>
                </Card.Footer>             
              </Card.Body>          
            </Card>
          </CardDeck>
          </div>
        </div>
      </div>
    )
  }
}
export default About;