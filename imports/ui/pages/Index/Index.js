import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import './Index.scss';

const Index = () => (
  <div className="Home">
    <div className="Header">
      <h1>NALU CREATIVE PORTAL</h1>
    </div>

    <div className="HomeBoxes">
      <Row>
        <Col md={4}>
          <h3>VIEW PROJECT PROGRESS</h3>
          <Button bsStyle="info">GO</Button>
        </Col>

        <Col md ={4}>
          <h3>VIEW CONTENT REQUESTS</h3>
          <Button bsStyle="info">GO</Button>
        </Col>

        <Col md ={4}>
          <h3>VIEW PROJECT CALENDAR</h3>
          <Button bsStyle="info">GO</Button>
        </Col>
      </Row>
    </div>
  </div>
);

export default Index;
