import React from 'react';
import ThemeSwitcher from './themeSwitch';
import { Row, Col } from 'react-bootstrap';

function Patterns() {
  return (
    <div className="page">
      <div className="content">
        <h2>Lesson 2: Conway's Game of Life</h2>
        <div>
          <p>Throughout this lesson, we will investigate unique patterns in Conway's game of life then, let you play with the simulation, then modify it!</p>
          <p>Learning objectives: Identify a periods pattern and gain understanding of pattern stability</p>
          <p>Use the "step" button in the interactive panel to step through the simulation</p>
        </div>

        <Row>
          <Col sm={3}>
            <h2>Oscillators</h2>
            <div className="flexbox-container">
              <div><iframe src="https://codesandbox.io/embed/conways-step-6mojjc"
                style={{ width: "450px", height: "475px", border: "0" }}
                title="Conway&#039;s Step"
                allow=""
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe></div>
              <div><p>&emsp;&emsp;</p></div>
            </div>
            <div>
              <p>Repeating patterns are known as oscillators</p>
              <p>The steps to repeat is an oscillator's period</p>
              <p>What is the period of the Pulsar pattern?</p>
              <ThemeSwitcher></ThemeSwitcher>
            </div>
          </Col>
          <Col sm={3}>
            <h2>Spaceships</h2>
            <div className="flexbox-container">
              <div><iframe src="https://codesandbox.io/embed/conways-glider-g3lwrq"
                style={{ width: "450px", height: "475px", border: "0" }}
                title="Conway&#039;s Step"
                allow=""
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe></div>
              <div><p>&emsp;&emsp;</p></div>
            </div>
            <p>Moving repeating patterns are known as spaceships</p>
            <p>Spaceships come in many shapes and sizes</p>
            <p>What is the period of this spaceship?</p>
            <ThemeSwitcher></ThemeSwitcher>
          </Col>
          <Col sm={3}>
            <h2>Glider Guns --Not implemented-- </h2>
            <div className="flexbox-container">
              <div><iframe src="https://codesandbox.io/embed/conways-glider-g3lwrq"
                style={{ width: "450px", height: "475px", border: "0" }}
                title="Conway&#039;s Step"
                allow=""
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe></div>
              <div><p>&emsp;&emsp;</p></div>
            </div>
            <p>Glider guns are oscillators that make spaceships</p>
            <p>The first glider gun won a $50 prize ($400 today)</p>
            <p>What is the period of this gliders this gun makes? (it's 4)</p>
            <ThemeSwitcher></ThemeSwitcher>
          </Col>
        </Row>




      </div>
    </div>
  );
}

export default Patterns;