import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

class About extends React.Component{

  render(){
    return(
      <div class="bodyFormat">
        <div class="slideshowFormat">
          <Carousel>
            <Carousel.Item>
              <img 
                src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-rtx-turing/2080-ti/gallery/geforce-rtx-2080-ti-gallery-b.jpg"
                alt="GeForce RTX 2080 Ti"
                class="imageFormat"/>
              <Carousel.Caption><h3>GeForce RTX 2080 Ti</h3></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.notebookcheck.net%2Ffileadmin%2FNotebooks%2FNews%2F_nc3%2FAMD_Ryzen_Threadripper_CPUs.png"
                alt="AMD Threadripper 3990x"
                class="imageFormat"/>
              <Carousel.Caption><h3>AMD Threadripper 3990x</h3></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img 
                src="https://www.asrock.com/images/index_TRX40Taichi.jpg"
                alt="ASRock TRX40 Taichi"
                class="imageFormat"/>
              <Carousel.Caption><h3>ASRock TRX40 Taichi</h3></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default About;