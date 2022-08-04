import Image from "next/image"
import styles from '../styles/Home.module.css'
import img from '../public/SanJuanMtnsGuitarPhoto.png'



const MobileDiv = () => {
  return (
    <div className={styles.mobileDiv}>
      <div className={styles.mobileImgWrapper}>
        <div>
          <Image
            src={img}
            alt="performing"
          />
        </div>
      </div>
    </div>
  )
}

export default MobileDiv
