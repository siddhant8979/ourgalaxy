
import React from 'react';

import Earth  from './image/earth.png';
import Jupiter from './image/jupiter.png';
import Mercury from './image/murcury.png';
import Mars from './image/mars.png';
import Venus from './image/venus.png';
import Uranus from './image/Uranus.png';
import Neptune from './image/neptune.png';
import Moon from './image/earthmoon.png';
import Saturn from './image/saturn.png';


import Sun from "./image/sun.jpg";
import {Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Planet =() => {
    return (<>
           <div className="Solardiv">
           <img className="solarbg" alt="" src={Sun}/>
           <div className="maincrsl">
           <h1 className="crslh1">More Destinations</h1>
           <Carousel   variant="dark">
  <Carousel.Item>
   
    <div className="carsldiv">
      <LinkContainer exact to="/planet/jupiter">
    <img
      className="marginimg d-block w-30"
      src={Jupiter}
      alt="First slide"
    />
    </LinkContainer>
    <h1 className="jup">Jupiter</h1>
    <br/>
    <br/>
    <br/><br/>
    
    </div>
    <div className="carsldiv">
      <LinkContainer to="/planet/earth">
    <img
      className=" ear d-block w-30"
      src={Earth}
      alt="First slide"
    />
    </LinkContainer>
    <h1>Earth</h1>
    <br/>
    <br/>
    <br/><br/>
    </div>
    <div className="carsldiv">
      <LinkContainer to="/planet/mercury">
    <img
      className="mer d-block w-30"
      src={Mercury}
      alt="First slide"
    />
    </LinkContainer>
    <h1>Mercury</h1>
    <br/>
    <br/>
    <br/><br/>
    </div>

    <Carousel.Caption className="carousel">
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="carsldiv">
    <LinkContainer to="/planet/mars">
    <img
      className="marginimg mar d-block w-30"
      src={Mars}
      alt="First slide"
    />
    </LinkContainer>
    <h1>Mars</h1>
    <br/>
    <br/>
    <br/><br/>
    </div>
    <div className="carsldiv">
      <LinkContainer to="/planet/venus">
    <img
      className="d-block w-30"
      src={Venus}
      alt="First slide"
    />
    </LinkContainer>
    <h1>Venus</h1>
    <br/>
    <br/>
    <br/><br/>
    </div>
    <div className="carsldiv">
      <LinkContainer to="/planet/sature">
    <img
      className="d-block w-30"
      src={Saturn}
      alt="First slide"
    />
    </LinkContainer>
    <h1>Saturn</h1>
    <br/>
    <br/>
    <br/><br/>
    </div>
    <Carousel.Caption>
      
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="carsldiv">
    <LinkContainer to="/planet/uranus">
    <img
      className="marginimg d-block w-30"
      src={Uranus}
      alt="First slide"
    />
    </LinkContainer>
    <h1>Uranus</h1>
    <br/>
    <br/>
    <br/><br/>
    </div>
    <div className="carsldiv">
      <LinkContainer to="/planet/neptune">
    <img
      className="d-block w-30"
      src={Neptune}
      alt="First slide"
    />
    </LinkContainer>
    <h1>Neptune</h1>
    <br/>
    <br/>
    <br/><br/>
    </div>
    <div className="carsldiv">
      <LinkContainer to="/planet/earthmoon">
    <img
      className="d-block w-30"
      src={Moon}
      alt="First slide"
    />
    </LinkContainer>
    <h1>Earth Moon</h1>
    <br/>
    <br/>
    <br/><br/>
    </div>

    <Carousel.Caption>
     
     </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
           </div>
          </>    
        );
};

export default Planet;