import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import DeviceCard from './DeviceCard';
import { Col, Row } from 'react-bootstrap';
import '../styles/BodyArea.css'
function NotFound() {
    return (
      <div className='gallery-wrapper'>
        <p>
          404 not found
        </p>
    </div>
    );
  }
  
  export default NotFound;
  
