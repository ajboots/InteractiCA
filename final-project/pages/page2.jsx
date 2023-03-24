import React from 'react';
import ThemeSwitcher from './themeSwitch';

function Page2() {
  return (
    <div className="page">
      <div className="content">
        <div className="scrollable-content">
          <h2>Lesson 2: Conway's Game of Life</h2>
          <div>
            <p>Throughout this lesson, we will investigate unique patterns in Conway's game of life then, let you play with the simulation, then hack it yourself!</p>
            <p>&nbsp;</p>
          </div>
          {/* <SandBox title="Pulsar" hidedevtools="1" expanddevtools="1" hidenavigation="1"  link="https://codesandbox.io/embed/conways-step-6mojjc"></SandBox> */}
          <h2>Oscillators</h2>
          <div className="flexbox-container">
            <div><iframe src="https://codesandbox.io/embed/conways-step-6mojjc"
              style={{ width: "450px", height: "475px", border: "0" }}
              title="Conway&#039;s Step"
              allow=""
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe></div>
            <div><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>
            <div>
              <p>Some patterns repeat, these are known as oscillators</p>
              <p>A period is the amount of steps it takes for a pattern to repeat</p>
              <p>What is the period of the Pulsar pattern?</p>
              <p>&nbsp;</p>
              <p>Use the "step" button in the interactive panel to step through the simulation</p>
              <ThemeSwitcher></ThemeSwitcher>
            </div>
          </div>
          <p>&nbsp;</p>
          <h2>Spaceships</h2>
          <div className="flexbox-container">
            <div><iframe src="https://codesandbox.io/embed/conways-glider-g3lwrq"
              style={{ width: "450px", height: "350px", border: "0" }}
              title="Conway&#039;s Step"
              allow=""
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe></div>
            <div><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>

            <div>
              <p>Some patterns move predictably, these are known as spaceships </p>
              <p>Spaceships move forever as long as there is space for them</p>
              <p>What is the period of this spaceship?</p>
              <p>&nbsp;</p>
              <p>Use the "step" button in the interactive panel to step through the simulation</p>
              <ThemeSwitcher></ThemeSwitcher>

            </div>
          </div>
          <p>&nbsp;</p>
          <h2>Conway's Game of Life</h2>
          <div>
            <p>This interactive simulation is a playground for cellular life! </p>
            <p>The three top buttons can help control the simulation, and the bottom slider adjusts the framerate</p>
            <p>For now, try clicking and dragging your mouse around on the board to create new life!</p>
          </div>
          <iframe src="https://codesandbox.io/embed/conways-game-of-life-vxsmmm?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.jsx&theme=dark"
            style={{ width: "95%", height: "600px", border: "0" }}
            title="Conway&#039;s Step"
            allow=""
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
          <div>
            <p>Now that you've messed around with the simulation, lets hack it!! </p>
            <p>For this lesson, we've been using Conway's rules. Lets change that. </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1: If it's not already, expand the code editor with the slider to the left of the simulation</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2: On line 62, change the right side of the equality statement from "&& neighbors &gt; 3" to "&& neighbors &gt; 4"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3: Hit the refresh button in the very bottom left of the simulation panel to see your change applied"</p>
            <p>With a one character change, we've drastically changed the behavior of the simulation. Try on your own to find other interesting rules</p>
            <p>Use 'ctrl + f' to find the '**' in the code. These are interesting lines of code to change </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;