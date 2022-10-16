import React from 'react';
import './App.css';
import Navheader from './components/Navheader';

import { Container, Row, Col, Stack, Card } from 'react-bootstrap';
import ImgOverlay from './components/DeviceCard';
import BodyArea from './components/BodyArea';

const App = () => {

  // console.log(process.env.REACT_APP_TEST)

  return (
    // <>
    //      <Container fluid>
    //             <Row>
    //                 <Col xs={2} id="sidebar-wrapper">      
    //                   <Sidebar />
    //                 </Col>
    //                 <Col  xs={10} id="page-content-wrapper">
    //                     this is a test
    //                 </Col> 
    //             </Row>

    //         </Container>
    //     </>

    <div className="App">
      {/* <header className="App-header">

      </header> */}
      <Navheader/>
      <BodyArea/>
    </div>
  );
}

export default App;
