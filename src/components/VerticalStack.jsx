import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import imageA from '../assets/sid_logo.png'

function VerticalStack() {
    return (
<Stack gap={3}>
      <div className="bg-light border">First item</div>
      <div className="bg-light border">Second item</div>
      <div className="bg-light border">Third item</div>
    </Stack>
    );
  }

  export default VerticalStack;

