import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';
import Image from 'next/image';
import closeIcon from '../public/images/close-button.png'

function Sidebar({ isOpen, setMenuStatus }) {
  let width = isOpen ? '300px' : '0px';
  let display = isOpen ? 'block' : 'none';
  return (
    <div>
      <div style={{"width" : width, "display" : display}} className={styles.side}>
        <Image className={styles.closeIcon} src={closeIcon} onClick={() => {
            setMenuStatus(false);
          }}></Image>
        <p><Link href='/'>About</Link></p>
        <p><Link href='/'>Introduction</Link></p>
        <p><Link href='/'>Lesson 1: Basics</Link></p>
        <p className={styles.sublesson}><Link href='/'>Sublesson</Link></p>
        <p className={styles.sublesson}><Link href='/'>Sublesson</Link></p>
        <p><Link href='/'>Lesson 2: 2D Automata</Link></p>
        <p><Link href='/'>Lesson 3: Applications</Link></p>
      </div>
    </div>
  )

}

export default Sidebar;