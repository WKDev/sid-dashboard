import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import logoImage from '../assets/sid_horizontal.png'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../styles/DeviceCard.css'
import axios from 'axios';
import LazyItem from './LazyItem';

import altImg1 from '../assets/cam1_opening.png'
import altImg2 from '../assets/cam2_opening.png'



type Image = {
  src: string;
  alt: string;
};

interface CardProps {
  title: string;
  uuid: string;
  ioss: boolean ;
}


const IotrCard = ({ title, uuid, ioss }: CardProps) => {
  const [cam1, setCam1] = useState({
    key: String(Date.now()),
    src: process.env.REACT_APP_S3_BASE_PATH + uuid + process.env.REACT_APP_S3_SUB_PATH + '/cam1.jpg' + '?random=' + String(Date.now())
  })
  const [cam2, setCam2] = useState({
    key: Math.random().toString(36),
    src: process.env.REACT_APP_S3_BASE_PATH + uuid + process.env.REACT_APP_S3_SUB_PATH + '/cam2.jpg' + '?random=' + String(Date.now())
  })

  const [prevCam1, setPrevCam1] = useState({
    key: String(Date.now()),
    src: process.env.REACT_APP_S3_BASE_PATH + uuid + process.env.REACT_APP_S3_SUB_PATH + '/cam1.jpg' + '?random=' + String(Date.now())
  })
  const [prevCam2, setPrevCam2] = useState({
    key: Math.random().toString(36),
    src: process.env.REACT_APP_S3_BASE_PATH + uuid + process.env.REACT_APP_S3_SUB_PATH + '/cam2.jpg' + '?random=' + String(Date.now())
  })

  const [runDemo, setRunDemo] = useState(false)

  const [isNewImgReady, setIsNewImgReady] = useState(false);

  function timeout(delay: number) {
    setIsNewImgReady(!isNewImgReady)

    return new Promise(res => setTimeout(res, delay));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will be called every 2 seconds');
      // setCam1('')
      setCam1({
        key: Math.random().toString(36),
        src: process.env.REACT_APP_S3_BASE_PATH + uuid + process.env.REACT_APP_S3_SUB_PATH + '/cam1.jpg' + '?random=' + String(Date.now())
      })
      setCam2({
        key: Math.random().toString(36),
        src: process.env.REACT_APP_S3_BASE_PATH + uuid + process.env.REACT_APP_S3_SUB_PATH + '/cam2.jpg' + '?random=' + String(Date.now())
      })
    }, 10000);

    timeout(500)

    return () => clearInterval(interval);
  }, []);

  const handleDemoButton = () => {
    axios.post('/external-api', {
      uuid: uuid,
      do_force: '1'
    });
    setRunDemo(!runDemo)
  }

  const handleExtButton = () => {

    axios.post('/external-api', {
      uuid: uuid,
      do_force: '1'
    });
  }


  // function preloadImage (src: string) {
  //   return new Promise((resolve, reject) => {
  //     const img : Image = new Image()
  //     img.onload = function() {
  //       resolve(img)
  //     }
  //     img.onerror = img.onabort = function() {
  //       reject(src)
  //     }
  //     img.src = src
  //   })
  // }

  return (
    <div className='deviceCard'>
      <Card>
        <Container >
          <Row>
            <Col>
              {/* <Image key={cam1.key} src={cam1.src}  width={320} height={180}/> */}
              {/* <LazyItem key={cam1.key} src={cam1.src} name={cam1.key}/> */}

              {runDemo ?
                <video autoPlay={true} src="https://sid-common-storage.s3.ap-northeast-2.amazonaws.com/sample.mp4" className="media-document mac video" width={320} height={180} onEnded={() => setRunDemo(false)}></video>
                :
                <Image key={cam1.key} src={cam1.src} width={320} height={180} onError={()=>{setCam1({key :String(Date.now()), src: altImg1})}}/>
              }
            </Col>
            <Col>
              
              {
                ioss?
              runDemo ?
                <video autoPlay={true} src="https://sid-common-storage.s3.ap-northeast-2.amazonaws.com/sample.mp4" className="media-document mac video" width={320} height={180} onEnded={() => setRunDemo(false)}></video>
                :
                <Image key={cam2.key} src={cam2.src} width={320} height={180} alt={altImg2} onError={()=>{setCam2({key :String(Date.now()), src: altImg2})}}/>
                :<></>
              }
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
              {ioss?
                  <Button variant="warning" onClick={handleDemoButton}>데모 영상</Button>
                  :
                  <>
                  </>
}                 
              </Col>
              <Col>
              {ioss?
                <Button variant="danger" onClick={handleExtButton}>강제 퇴치</Button>
                :
                <></>
              }
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>

    </div>
  );
}

export default IotrCard;