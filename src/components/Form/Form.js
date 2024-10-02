import React from 'react'
import styles from "./Form.module.css"

export default function Form() {
  return (
    <form className={styles.form} id='form'>
      <h2 className={styles.formTitle}>Contact Us</h2>
      <div className={styles.inputsWrapper}>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='E-Mail Address'/>
            <input type='text' placeholder='Company Name'/>
            <input type='text' placeholder='Contact Info'/>
            <textarea placeholder='Additional Note'/>
      </div>

      <button className={styles.formBtn}>Submit Request</button>
    </form>
  )
}
