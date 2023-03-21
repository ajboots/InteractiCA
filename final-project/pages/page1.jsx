import Head from 'next/head'
import styles from '../styles/Home.module.css';
// import TableOfContents from '../components/toc';
import Button from 'react-bootstrap/Button';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

function Page1() {
  return (
    <div className="page">
    <div className="content">
      <div className="scrollable-content">
      <div className={styles.container}>
                    <Head>
                      <title>Cellular Education</title>
                      <link rel="icon" href="/images/favicon.ico" />
                    </Head>
              
                    <main>
                      <header className={styles.heading}>
                        <h1 className={styles.title}>
                          Interactive Cellular Education
                        </h1>
              
                        <p className={styles.description}>
                          Interactive education about cellular automata.
                        </p>
                      </header>
              
                      <div className={styles.content}>
                        {/* <TableOfContents></TableOfContents> */}
                        <h2>What is Cellular Automata?</h2>
                        <p>Brief Description.</p>
                        <h2>Why should I learn about Cellular Automata?</h2>
                        <p>Brief Description.</p>
                        <h2>What is this project?</h2>
                        <h1>Lesson 1: Basics of Cellular automata</h1>
                        <p>This is for Christopher</p>
              
                        
              

                      </div>
                    </main>
              
                    <footer>
                      Interactive Cellular Automata. Created by Alex Boots & Christopher Fields.
                    </footer>
                  </div>
      </div>
    </div>
  </div>
  );
}

export default Page1;