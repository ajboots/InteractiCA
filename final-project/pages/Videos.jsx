import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';
const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 0,
  },
};
function Videos() {

  return (
    <div className="page">
      <div className="content">
          <h1>Further exploration: Cellular Automata Implementations</h1>
          <p>&nbsp;</p>
          <Row>
            <h2>Cellular Automata in 3D!</h2>
            &emsp;
            <Col sm={3}>
            <p>Caves, explosions, gliders </p>
              <YouTube videoId="dQJ5aEsP6Fs" opts={opts} />
              
            </Col>
            <Col sm={3}>
            <p>Fractals, organic growth</p>
              <YouTube videoId="IbVi5VSapFs" opts={opts} />
            </Col>
            <Col>
            <p>Plant like growth</p>
            <YouTube videoId="XA7DHeVb0go" opts={opts} />
            </Col>
            
            <p>&emsp;&emsp;All three videos were created using <a href="https://softology.pro/voc.htm">Visions of Chaos</a>, a free software, created by <a href="https://softologyblog.wordpress.com/">Softology</a></p>
          </Row>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <Row>
            <h2>Organic Cellular Automata!</h2>
            &emsp;
            <Col sm={3}>
            <p>Molecular patterns</p>
              <YouTube videoId="nT_TyDbKLdU" opts={opts} />
            </Col>
            <Col sm={3}>
            <p>Cellular patterns</p>
              <YouTube videoId="aAQ5jicbt7I" opts={opts} />
            </Col>
            <Col>
            <p>Slime mold</p>
            <YouTube videoId="NPlAEnGX4Dg" opts={opts} />
            </Col>
            <p>&emsp;&emsp;First two videos were created using <a href="https://github.com/Slackermanz/VulkanAutomata">Vulkan Automata</a>, an open source software, created by <a href="https://slackermanz.com/">Slackermanz</a></p>
          </Row>
        </div>
      </div>
  );
}

export default Videos;