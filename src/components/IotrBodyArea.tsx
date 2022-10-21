import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import imageA from '../assets/sid_logo.png'
import DeviceCard from './DeviceCard';
import { Col, Row } from 'react-bootstrap';
import '../styles/BodyArea.css'
function IotrBodyArea() {
    return (
      <div className='gallery-wrapper'>
          <DeviceCard interaction = {false} title='sid-iotr-001' uuid='0e6eccaa-a86a-0d03-75fe-f0ff48f23557' />
          <DeviceCard  interaction = {false}  title='sid-iotr-002' uuid='5afa4a80-55bb-17f6-4f02-0a9ae2e11a38' />
          <DeviceCard  interaction = {false} title='sid-iotr-003' uuid='dbad35fb-fd21-e8aa-1d37-7bf3b5dc1691' />
          {/* <DeviceCard title='sid-iotr-004' uuid='abfbe412-7bb5-b632-ee2b-bf47cca2f7b0' /> */}
    </div>
    );
  }
  
  export default IotrBodyArea;
  
