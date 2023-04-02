import React, { useRef, useState, useEffect } from 'react';
import Intro from './Intro.jsx';
import Patterns from './Patterns.jsx';
import Videos from './Videos.jsx';
import Conways from './Conways.jsx';
import Sidebar from './Sidebar.jsx';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import menuIcon from '../public/images/menu-icon.png'

function App() {
  const [isMenuOpen, setMenuStatus] = React.useState(false);

  return (
    <div className="App">
        <div className={styles.header}>
          <Image className={styles.menuIcon} src={menuIcon} onClick={() => {
              setMenuStatus(true);
            }}></Image>
          <h1>Interactive Cellular Education</h1>
        </div>

        <Sidebar isOpen={isMenuOpen} setMenuStatus={setMenuStatus}></Sidebar>
        
        <main className={styles.main}>
            <div className="pages">
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
        </main>


    </div>
  );
}

export default App;


