import Head from 'next/head'
import styles from '../styles/Home.module.css';
// import TableOfContents from '../components/toc';
import Button from 'react-bootstrap/Button';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

function Intro() {
  return (
    <div className="page">
      <div className="content">
        <div className={styles.container}>
          <main>
            <header className={styles.heading}>
              Lesson 1: Basics of Cellular automata
            </header>

            <div className={styles.content}>
              {/* <TableOfContents></TableOfContents> */}
              <p>This is for Christopher</p>
              <h2>What is Cellular Automata?</h2>
              <p>Brief Description.</p>
              <h2>Why should I learn about Cellular Automata?</h2>
              <p>Brief Description.</p>
              <h2>What is this project?</h2>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Intro;