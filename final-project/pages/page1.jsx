// import Head from 'next/head'
// import styles from '../styles/Home.module.css';
// import TableOfContents from '../components/toc';
// import Button from 'react-bootstrap/Button';
// // Importing the Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
// import Toast from 'react-bootstrap/Toast';
// import ThemeSwitcher from './themeSwitch';
// const ExampleToast = ({ children }) => {
//   const [show, toggleShow] = useState(true);

//   return (
//     <>
//       {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
//       <Toast show={show} onClose={() => toggleShow(false)}>
//         <Toast.Header>
//           <strong className="mr-auto">React-Bootstrap</strong>
//         </Toast.Header>
//         <Toast.Body>{children}</Toast.Body>
//       </Toast>
//     </>
//   );
// };

// export default function Page1() {
//   return (
    
//     <div className={styles.container}>
                    

//       <Head>
//         <title>Cellular Education</title>
//         <link rel="icon" href="/images/favicon.ico" />
//       </Head>

//       <main>
//         <header className={styles.heading}>
//           <h1 className={styles.title}>
//             Interactive Cellular Education
//           </h1>

//           <p className={styles.description}>
//             Project for interactive education of cellular automata.
//           </p>
//         </header>

//         <h1 className="header">Welcome To React-Bootstrap</h1>
//         <ExampleToast>
//           This is the answer to the question
//         </ExampleToast>

//         <div className={styles.content}>
//           <TableOfContents></TableOfContents>
//           <h2>What is Cellular Automata?</h2>
//           <p>Brief Description.</p>
//           <h2>Why should I learn about Cellular Automata?</h2>
//           <p>Brief Description.</p>
//           <h2>What is this project?</h2>
//           <h1>Lesson 1: Basics of Cellular automata</h1>
//           <p>This is for Christopher</p>

//           <h1>Lesson 2: Conway's Game of Life</h1>

//           {/* <SandBox title="Pulsar" hidedevtools="1" expanddevtools="1" hidenavigation="1"  link="https://codesandbox.io/embed/conways-step-6mojjc"></SandBox> */}
//           <h2>Oscillators</h2>
//           <div className="flexbox-container">
//             <div><iframe src="https://codesandbox.io/embed/conways-step-6mojjc"
//               style={{ width: "450px", height: "475px", border: "0" }}
//               title="Conway&#039;s Step"
//               allow=""
//               sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
//             ></iframe></div>
//             <div><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>

//             <div>
//               <p>Some patterns repeat, these are known as oscillators</p>
//               <p>A period is the amount of steps it takes for a pattern to repeat</p>
//               <p>What is the period of the Pulsar pattern?</p>
//               <p>&nbsp;</p>
//               <p>Use the "step" button in the interactive panel to step through the simulation</p>
//               <ThemeSwitcher></ThemeSwitcher>
//             </div>
//           </div>

//           <h2>Spaceships</h2>
//           <div className="flexbox-container">
//             <div><iframe src="https://codesandbox.io/embed/conways-glider-g3lwrq"
//               style={{ width: "450px", height: "350px", border: "0" }}
//               title="Conway&#039;s Step"
//               allow=""
//               sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
//             ></iframe></div>
//             <div><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>

//             <div>
//               <p>Some patterns move predictably, these are known as spaceships </p>
//               <p>Spaceships move forever as long as there is space for them</p>
//               <p>What is the period of this spaceship?</p>
//               <p>&nbsp;</p>
//               <p>Use the "step" button in the interactive panel to step through the simulation</p>
//               <ThemeSwitcher></ThemeSwitcher>

//             </div>
//           </div>

//           <iframe src="https://codesandbox.io/embed/conways-game-of-life-vxsmmm"
//             style={{ width: "80%", height: "500px", border: "0" }}
//             title="Conway&#039;s Step"
//             allow=""
//             sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
//           ></iframe>
//         </div>
//       </main>

//       <footer>
//         Interactive Cellular Automata. Created by Alex Boots & Christopher Fields.
//       </footer>
//     </div>
//   )
// }


import React from 'react';

function Page1() {
  return (
    <div className="page">
    <div className="content">
      <h1>Page 1</h1>
      <div className="scrollable-content">
        <p>Vertically scrolling content goes here</p>
        <p>Vertically scrolling content goes here</p>
        <p>Vertically scrolling content goes here</p>
        <p>Vertically scrolling content goes here</p>
        <p>Vertically scrolling content goes here</p>
      </div>
    </div>
  </div>
  );
}

export default Page1;