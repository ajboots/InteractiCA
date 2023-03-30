import React, { useRef, useState, useEffect } from 'react';
import Intro from './Intro.jsx';
import Patterns from './Patterns.jsx';
import Videos from './Videos.jsx';
import Conways from './Conways.jsx';
import styles from '../styles/Home.module.css';


function App() {
  const pagesRef = useRef(null);
  return (
    <div className="App">
      <h1 className={styles.title}>
        Interactive Cellular Education
      </h1>
      <div className="pages" ref={pagesRef}>
        <div className="page">
          <Intro />
        </div>
        <div className="page">
          <Patterns />
        </div>
        <div className="page">
          <Conways />
        </div>
        <div className="page">
          <Videos />
        </div>
      </div>
    </div>
  );
}

export default App;