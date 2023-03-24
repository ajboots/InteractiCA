import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';
const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 0,
  },
};
function Page3() {

  return (
    <div className="page">
      <div className="content">
        <div className="scrollable-content">
          <h1>Lesson 3: Other Applications</h1>
          <Row>
            <h2>Cellular Automata in 3D!</h2>
            <YouTube videoId="dQJ5aEsP6Fs" opts={opts} />
            <p>What sorts of applications could this have?</p>
          </Row>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <Row>
            <h2>Cellular behaving organically!</h2>
            <YouTube videoId="NPlAEnGX4Dg" opts={opts} />
          </Row>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <Row>
            <h2>Advanced Multi-naibourhoood Cellular Automata!</h2>
            <Col sm={4}>
              <YouTube videoId="nT_TyDbKLdU" opts={opts} />
            </Col>
            <Col>
              <YouTube videoId="aAQ5jicbt7I" opts={opts} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Page3;