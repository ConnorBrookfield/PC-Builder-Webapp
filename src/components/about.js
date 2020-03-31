import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

class About extends React.Component{

  render(){
    return(
      <div class="bodyFormat">
        <h2>Here is some information about ourselves</h2>
        <ul > 
          <li>Name: Jack Haugh</li>
          <li>Age: 22</li>
          <li>Birthday: 21st Of August</li>
          <li>Hobbies: Computing, Rugby, Darts, music</li>
          <li><Button href="https://github.com/JackH97">Click Button to go to Jack's GitHub</Button></li>
        </ul>

        <ul>
          <li>Name: Connor Brookfield</li>
          <li>Age: 21</li>
          <li>Birthday: 20th Of August</li>
          <li>Hobbies: Computers, music, Gaming</li>
          <li><Button href="https://github.com/G00361129">Click Button to go to Connor's GitHub</Button></li>
        </ul>
      </div>
    )
  }
}
export default About;