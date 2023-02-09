import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Step from '../components/step';

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
            Brief description of the project. Instructions. Etc.
          </p>
        </header>

        <div className={styles.content}>
          <Step></Step>
          <Step></Step>
          <Step></Step>
          <Step></Step>
          <Step></Step>
          <Step></Step>
          <Step></Step>
          <Step></Step>
          <Step></Step>
        </div>
      </main>

      <footer>
        Interactive Cellular Automata. Created by Alex Boots & Christopher Fields.
      </footer>
    </div>
  )
}