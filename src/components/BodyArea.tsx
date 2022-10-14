import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import imageA from '../assets/sid_logo.png'
import DeviceCard from './DeviceCard';
import { Col, Row } from 'react-bootstrap';
import '../styles/BodyArea.css'
function BodyArea() {
    return (
      <div className='gallery-wrapper'>
          <DeviceCard title='test device-001' uuid='456' />
          <DeviceCard title='test device-001' uuid='456' />
          <DeviceCard title='test device-001' uuid='456' />
          <DeviceCard title='test device-001' uuid='456' />
    </div>
    );
  }
  
  export default BodyArea;
  
