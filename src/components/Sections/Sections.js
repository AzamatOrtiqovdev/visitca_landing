import React from 'react'
import styles from "./Sections.module.css";
import Vision from '../Vision/Vision';
import Service from '../Service/Service';
import Partner from '../Partner/Partner';
import Process from '../Process/Process';
import Form from '../Form/Form';

export default function Sections() {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <Vision />
        <Service />
        <Partner />
        <Process />
        <Form />
      </div>
    </div>

  )
}
