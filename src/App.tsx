import React, { useEffect, useState } from 'react';
import './App.css';
import Navheader from './components/Navheader';

import { Container, Row, Col, Stack, Card } from 'react-bootstrap';
import ImgOverlay from './components/DeviceCard';
import BodyArea from './components/IossBodyArea';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import IossBodyArea from './components/IossBodyArea';
import IotrBodyArea from './components/IotrBodyArea';

const App = () => {

  // console.log(process.env.REACT_APP_TEST)

  // let [fade, setFade] = useState('')
  
    // useEffect(()=>{
    //   // tab의 상태가 변할때 (클릭 후 다른탭 열리면) 0.1초 뒤 'end' className 바인딩
    //   const fadeTimer = setTimeout(()=>{ setFade('end') }, 100)
    //   return ()=>{
    //   // 기존 fadeTimer 제거 후 class 빈 값으로 변경
    //   clearTimeout(fadeTimer);
    //   setFade('')
    // }
    // }, [tab])

  return (
    <div className="App">

{/* <div className={'start ' + fade}>
        { <div>내용0</div>, <div>내용1</div>, <div>내용2</div> }
      </div> */}
      {/* <header className="App-header">

      </header> */}
      <Navheader />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IossBodyArea />
          }></Route>
          <Route path="/ioss" element={<IossBodyArea />}></Route>
          <Route path="/iotr" element={<IotrBodyArea />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
