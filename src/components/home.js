import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

class About extends React.Component{

  render(){
    return(
      <div class="bodyFormat">
        <div class="slideshowFormat">
          <br></br>
          <h1>PC builder Pro</h1>
          <br></br>
          <br></br>
          <h3>Click on image(s) to see product further</h3>
          <Carousel>
            <Carousel.Item>
              <a href="https://www.nvidia.com/en-gb/geforce/graphics-cards/rtx-2080-ti/">
              <img
                src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-rtx-turing/2080-ti/gallery/geforce-rtx-2080-ti-gallery-b.jpg"
                alt="GeForce RTX 2080 Ti"
                class="imageFormat"/>
                </a>
              <Carousel.Caption><h3>GeForce RTX 2080 Ti</h3></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <a href="https://www.amd.com/en/products/cpu/amd-ryzen-threadripper-3990x">
              <img 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.notebookcheck.net%2Ffileadmin%2FNotebooks%2FNews%2F_nc3%2FAMD_Ryzen_Threadripper_CPUs.png"
                alt="AMD Threadripper 3990x"
                class="imageFormat"/>
                </a>
              <Carousel.Caption><h3>AMD Threadripper 3990x</h3></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href="https://www.asrock.com/mb/AMD/TRX40%20Taichi/">
              <img 
                src="https://www.asrock.com/images/index_TRX40Taichi.jpg"
                alt="ASRock TRX40 Taichi"
                class="imageFormat"/>
                </a>
              <Carousel.Caption><h3>ASRock TRX40 Taichi</h3></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br></br>
          <img
          src="https://img.pngio.com/computer-update-delplogdelplog-funny-computer-png-814_555.png"
          alt="Homepage pic"
          height="300"
          width="300"
          />
          <br></br>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      </div>
      
    )
  }
}

export default About;

