import Card from 'react-bootstrap/Card';
import React from 'react';
import logoImage from '../assets/sid_horizontal.png'
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/DeviceCard.css'

type Image = {
  src: string;
  alt: string;
};

interface CardProps {
  title: string;
  uuid: string;
}


const DeviceCard = ({title , uuid }:CardProps) => {

  const cam1_link ='https://sid-common-storage.s3.ap-northeast-2.amazonaws.com/10000000-cebe-48bf-b512-760bf8eedab3/semi-stream/cam1.jpg'
  const cam2_link ='https://sid-common-storage.s3.ap-northeast-2.amazonaws.com/10000000-cebe-48bf-b512-760bf8eedab3/semi-stream/cam2.jpg'

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
                <Row>
                  <Col md='3'>
                  <Card.Title>{title}</Card.Title>
                  </Col>
                  <Col>
                  </Col>
                  <Col>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
       
     </div>
  );
}

export default DeviceCard;