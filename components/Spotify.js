import styles from '../styles/Home.module.css'
import React from 'react'

const Spotify = () => {
  return (
    <div className={styles.colorDiv}>
      <div className={`${styles.divs} ${styles.listenDiv}`} id="listen-div">
        <div className={styles.titleDiv}>
          <h2><a href="#" className={styles.coolLink}>Listen on Spotify</a></h2>
        </div>
        <p>Al Mauls latest release <i>The Wandering</i>.</p>
        <iframe style={{borderRadius: '12px'}}
          src="https://open.spotify.com/embed/album/0RwmVLqSpavFhZ93SsSAZn?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          >
        </iframe>
      </div>
    </div>
  )
}

export default Spotify
