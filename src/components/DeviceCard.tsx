import Card from 'react-bootstrap/Card';
import React from 'react';
import logoImage from '../assets/sid_horizontal.png'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/DeviceCard.css'
import axios from 'axios';

type Image = {
  src: string;
  alt: string;
};

interface CardProps {
  title: string;
  uuid: string;
}


const DeviceCard = ({title , uuid }:CardProps) => {
  const cam1_link = process.env.REACT_APP_S3_BASE_PATH + uuid + process.env.REACT_APP_S3_SUB_PATH + '/cam1.jpg'
  const cam2_link =process.env.REACT_APP_S3_BASE_PATH + uuid +'/cam2.jpg'

  const handleDemoButton = () => {
    // const { name } = e.target;

    axios({
      method: 'post',
      url: '/user/12345',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    });
  }

  return (
    <div className='deviceCard'>
          <Card>
          <Container >
            <Row>
            <Col>
            <img src={cam1_link}  width={320} height={180}/>
            </Col>
            <Col>
            <img src={cam2_link}  width={320} height={180}/>
            </Col>
            </Row>
            </Container>            

            <Card.Body>
              <Container>
                <Row id='inner_vertical'>
                  <Col md='6'>
                  <Card.Title>{title}</Card.Title>
                  </Col>
                  <Col md='2'>
                  </Col>
                  <Col>
                  <Button variant="warning">데모 영상</Button>
                  </Col>
                  <Col>
                  <Button variant="danger">강제 퇴치</Button>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
       
     </div>
  );
}

export default DeviceCard;