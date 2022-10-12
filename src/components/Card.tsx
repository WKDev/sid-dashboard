import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import imageA from '../assets/sid_logo.png'
function Card() {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={imageA}
              width="40"
              height="26"
              className="d-inline-block align-top"
            />{' '} 
          </Navbar.Brand>
        </Container>
        </Navbar>
    );
  }
  
  export default Card;
  
