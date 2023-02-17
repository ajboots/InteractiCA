import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Step from '../components/step';
import SandBox from '../components/sandbox';
import TableOfContents from '../components/toc';

export default function Home() {
  return (
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
            Project for interactive education of cellular automata.
          </p>
        </header>

        

        <div className={styles.content}>
          <TableOfContents></TableOfContents>
          <h2>What is Cellular Automata?</h2>
          <p>Brief Description.</p>
          <h2>Why should I learn about Cellular Automata?</h2>
          <p>Brief Description.</p>
          <h2>What is this project?</h2>
          <p>Brief Description.</p>

          <h1>Lesson 1: The Basics of Cellular Automata</h1>

          <p>Example text.</p>

          
          
          <SandBox title="Conway's Game of Life Demo" link="https://codesandbox.io/embed/conways-game-of-life-vxsmmm"></SandBox>
          
        </div>
      </main>

      <footer>
        Interactive Cellular Automata. Created by Alex Boots & Christopher Fields.
      </footer>
    </div>
  )
}