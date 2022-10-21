import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import imageA from '../assets/sid_logo.png'
import DeviceCard from './DeviceCard';
import { Col, Row } from 'react-bootstrap';
import '../styles/BodyArea.css'
function IossBodyArea() {
    return (
      <div className='gallery-wrapper-ioss'>
          <DeviceCard ioss = {true} title='sid-ioss-001' uuid='d061e93b-dd5a-9eb4-0e01-86d37761dbcd' />
          <DeviceCard ioss = {true} title='sid-ioss-002' uuid='9dd35735-37e6-0344-5366-a3725e4e92aa' />
          <DeviceCard ioss = {true} title='sid-ioss-003' uuid='2100733b-af75-675a-e2b1-e001503fd412' />
          <DeviceCard ioss = {true} title='sid-ioss-004' uuid='abfbe412-7bb5-b632-ee2b-bf47cca2f7b0' />
    </div>
    );
  }
  
  export default IossBodyArea;
  
