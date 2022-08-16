import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {HiDownload} from 'react-icons/hi'
import noise from '../public/noise.png'
// import axios from 'axios'
// import fileDownload from 'js-file-download'
import Link from 'next/link'


const About = () => {
  // const handleClick = (url, filename) => {
  //   axios.get(url, {
  //     responseType: 'blob',
  //   })
  //   .then((res) => {
  //     fileDownload(res.data, filename)
  //   })
  // }
  return (
    <div>

      <div className={styles.divs} id="about-div">

        <div className={styles.titleDiv}>
          <h2 className={styles.aboutTitle}>About</h2>
        </div>

        <p className={styles.about}>Al Maul (Alan Hunter Stensgar-Maul) was born and raised in Western Montana, where he obtained his bachelor&apos;s from the U of M.
           After studying writing, he leaned into songwriting for 7 or 8 years before releasing his debut album, The Wandering in March 2022. 
           In the years leading up, he found work on Montana ranches, firelines for the U.S. Forest Service, ski-town kitchens/bars, and high country construction sites. 
           All of those experiences live and feed &quot;The Wandering&quot; and express themselves in the style of americana/folk music. 
           He currently operates out of Missoula, MT and Vail, CO.
        </p>
        <div className={styles.pressKit}>
          {/* <button onClick={() => {() => handleClick({noise}, 'sample.png')}}
          className={`${styles.coolLink} ${styles.pressKitLink}`}>
            <HiDownload />
            Download Press Kit 
          </button> */}
          <a
            href={noise}
            download='pic'
          >
            <h3>test</h3>
            
          </a>
          <p className={styles.about}>
            The presss kit contains photos, and a .pdf poster.
        </p>
        </div>
      </div>
    </div>
  )
}

export default About
