import React from 'react'
import styles from '../styles/Home.module.css'
import { useForm, ValidationError } from '@formspree/react';
import ContactMessage from './ContactMessage';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('contactForm');
  if (state.succeeded) {
    return <ContactMessage />;
  }

  return (
    <div className={styles.colorDiv}>
      <div className={styles.divs} id="htmlFormDiv">
        <div className={styles.titleDiv}>
          <h2>Contact</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.htmlFormGroup}>
            <fieldset id="name">
              <div>
                <label htmlFor="firstName">First Name *</label>
                <input id="firstName" name="firstName" type="text" placeholder="" className={styles.formControl} required />
              </div>

              <div>
                <label htmlFor="lastName">Last Name *</label>
                <input id="lastName" name="lastName" type="text" placeholder="" className={styles.formControl} required />
              </div>
            </fieldset>
          </div>
          <div className={styles.fromGroup}>
            <label htmlFor="email"> Email * </label>
            <input id="email" name="email" type="email" placeholder="" className={styles.formControl} required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className={styles.fromGroup}>
            <label htmlFor="comments">Message*</label>
            <textarea id="comments" name="comments" placeholder="" className={`${styles.inputTextArea} ${styles.formControl}`}  ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className={styles.submitButton}>
            Send
          </button>
        </form>

      </div>

    </div>


  )
}
