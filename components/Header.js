import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { FaInstagram, FaSpotify, FaYoutube, FaItunes, FaTiktok } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import nameLogo from '../public/just-name-clear.png'
import { FiMenu } from 'react-icons/fi'


const Header = ({ showHeaderLogo }) => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isLogoActive, setIsLogoActive] = useState(false);

  function handleScroll() {
    window.scrollY > 1 ? setIsHeaderActive(true) : setIsHeaderActive(false);
    window.scrollY > 700 ? setIsLogoActive(true) : setIsLogoActive(false);
  }
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const [click, setClick] = useState(false)

  return (
    <header id='header'
      className={`${styles.mainHeader} ${isHeaderActive ? styles.sticky : ''}`}
    >
      <nav className={styles.mainNav}>
        <div className={styles.dropDiv} >

          <ul className={styles.dopUl}>

            <li className={styles.dropdown}>
              <button
                className={`${styles.hamburger} ${styles.link}`}
              >
                <FiMenu />
              </button>
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownLinks}>
                  <Link href={'/'}>
                    <a>Home</a>
                  </Link>
                  <Link href={'/press'}>
                    <a>Press Bio</a>
                  </Link>
                  <Link href={'/#shows-section'}>
                    <a>Shows</a>
                  </Link>
                  <Link href={'/shop'}>
                    <a>Shop</a>
                  </Link>
                </div>
              </div>
            </li>

          </ul>
        </div>

        <div className={styles.headerDiv1}>
          <ul className={styles.linksUl}>
            <li>
              <Link href={'/'}>
                <a className={styles.coolLink}>Home</a>
              </Link>
            </li>
            <li>
              <Link href={'/press'}>
                <a className={styles.coolLink} >Press Bio</a>
              </Link>
            </li>
            <li>
              <Link href={'/#shows-section'}>
                <a className={styles.coolLink}>Shows</a>
              </Link>
            </li>
            <li>
              <Link href={'/shop'}>
                <a className={styles.coolLink} >Shop</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.headerDiv2}>
          {console.log(`logo state ${isLogoActive}`)}
          <span className={`${isLogoActive ? styles.showName : styles.headerName} ${showHeaderLogo ? styles.showName : ''}`}>
            <Image
              src={nameLogo}
              alt="logo"
            />
          </span>
        </div>

        <div className={styles.headerDiv3}>
          <ul id="social-ul" className={styles.socialUl}>
            <li>
              <Link href='https://www.instagram.com/al_maul/'>
                <a target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </Link>
            </li>
            <li>
              <Link href='https://open.spotify.com/album/0RwmVLqSpavFhZ93SsSAZn?si=rOcZZapaSTy4Swr20hy4kQ'>
                <a target="_blank" rel="noopener noreferrer">
                  <FaSpotify />
                </a>
              </Link>
            </li>
            <li>
              <Link href='https://www.youtube.com/channel/UC1WE-LaA09-RSyv4T-XYD4Q'>
                <a target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </Link>
            </li>
            <li>
              <Link href='https://www.tiktok.com/@_almaul'>
                <a target="_blank" rel="noopener noreferrer">
                  <FaTiktok />
                </a>
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  )
}

export default Header
