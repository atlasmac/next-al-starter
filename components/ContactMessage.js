import styles from '../styles/Home.module.css'

const ContactMessage = () => {

  return (
    <div className={`${styles.colorDiv} ${styles.contactMessageDiv}`}>
    <div className={`${styles.divs} ${styles.contactMessage}`}>
      <h3  className={styles.titleDiv}>Thanks for your message!<br /> We will be reaching out soon.</h3>
    </div>
    </div>
  )
}

export default ContactMessage
