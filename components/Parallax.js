import styles from '../styles/Home.module.css'
import nameLogo from '../public/just-name-clear.png'
import Image from 'next/image'

const Parallax = () => {
  return (
    <div className={styles.parallax}>
      {/* <h1>Al Maul</h1> */}
      <div className={styles.justName}>
        <Image
          src={nameLogo}
          alt="logo"
        />
      </div>
    </div>
  )
}

export default Parallax
