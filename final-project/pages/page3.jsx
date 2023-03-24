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
          <h1>Lesson 3: Cellular Automata Implementations</h1>

          <Row>
            <h2>Cellular Automata in 3D!</h2>
            <p>What sorts of applications could this have?</p>
            
            <Col sm={4}>
              <YouTube videoId="dQJ5aEsP6Fs" opts={opts} />
            </Col>
            <Col sm={4}>
              <YouTube videoId="IbVi5VSapFs" opts={opts} />
            </Col>
            <Col>
            <YouTube videoId="XA7DHeVb0go" opts={opts} />
            </Col>
          </Row>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <Row>
            <h2>Advanced Cellular Automata behaving organically!</h2>
            <Col sm={4}>
              <YouTube videoId="nT_TyDbKLdU" opts={opts} />
            </Col>
            <Col sm={4}>
              <YouTube videoId="aAQ5jicbt7I" opts={opts} />
            </Col>
            <Col>
            <YouTube videoId="NPlAEnGX4Dg" opts={opts} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Page3;