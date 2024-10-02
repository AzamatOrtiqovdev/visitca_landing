import React from 'react'
import styles from './Header.module.css'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'


export default function Header() {
  return (
    <div className={styles.header} id='header'>
        <div className='container'>
            <Navbar />
            <Main />
        </div>
    </div>
  )
}
