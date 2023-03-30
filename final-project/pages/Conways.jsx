import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Conways() {
  return (
    <div className="page">
      <div className="content">
        <div>
          <h1>Lesson 3: Conway's Game of Life</h1>
          <div>
            <p>This interactive simulation is a playground for cellular life! </p>
            <p>Try clicking and dragging your mouse around on the board to create new life! Controls are at the top of the simulation panel.</p>
          </div>
          <iframe src="https://codesandbox.io/embed/conways-game-of-life-vxsmmm?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.jsx&theme=dark"
            style={{ width: "100%", height: "600px", border: "0" }}
            title="Conway&#039;s Step"
            allow=""
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
          <div>
            <p>Now that you've experimented with the simulation, lets modify it!! In this lesson, we've been using Conway's rules. Lets change that. </p>
            <p>This guide covers how to transform the code into 2 different interesting states, experiment to find your own!</p>
            <p>&nbsp;</p>
            <Row>
              <Col>
                <p>Maze Generator:</p>
                <p>&emsp; 1: If it's not already, expand the code editor with the slider to the left of the simulation</p>
                <p>&emsp; 2: On line 62, change the right side of the equality statement from "neighbors &gt; 3" to "neighbors &gt; 4"</p>
                <p>&emsp; 3: Hit the refresh button in the very bottom left of the simulation panel to see your change applied</p>
              </Col>
              <Col>
                <p>Cave Generator:</p>
                <p>&emsp; 1: Go to line 62, and comment it out with 'ctrl + /'</p>
                <p>&emsp; 2: On line 60, change the right side of the equality statement from "neighbors &lt; 2" to "neighbors &lt; 4"</p>
                <p>&emsp; 3: On line 64, change the right side of the equality statement from "neighbors === 3" to "neighbors &gt; 4"</p>
                
              </Col>
            </Row>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Conways;