import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { CardDeck } from 'react-bootstrap';

class About extends React.Component{

  render(){
    return(
      <div>
        <h1>About Us!</h1>
          <h2>Here is some information about ourselves</h2>
          <div class="aboutFormat">
          <CardDeck>
            <ul>
            <b>
            <p>Name: Jack Haugh</p>
            <p>Age: 22</p>
            <p>Birthday: 21st Of August</p>
            <p>Hobbies: Computing, Rugby, Darts, music</p>
            <p><Button href="https://github.com/JackH97">Click Button to go to Jack's GitHub</Button></p>
            </b>
            </ul>
          
          </CardDeck>
<br></br>
         <CardDeck>
          <ul>
            <b>
            <p>Name: Connor Brookfield</p>
            <p>Age: 21</p>
            <p>Birthday: 20th Of August</p>
            <p>Hobbies: Computers, music, Gaming</p>
            <p><Button href="https://github.com/G00361129">Click Button to go to Connor's GitHub</Button></p>
            </b>
          </ul>
          </CardDeck>
        </div>
      </div>
    )
  }
}
export default About;