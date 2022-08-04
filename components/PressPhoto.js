import Image from "next/image"
import styles from '../styles/Home.module.css'
import img from '../public/OutsidePortraitFall21.png'



const PressPhoto = (props) => {
  return (
    <div className={`${styles.divs} ${styles.pressPhotoDiv}`}>
      <div>
        <div className={styles.pressImg} >
          <Image
            src={props.src}
            alt="performing"
          />
        </div>
      </div>
    </div>
  )
}

export default PressPhoto
