import Head from 'next/head';
import styles from '../styles/Home.module.css';

import MobileDiv from '../components/MobileDiv';
import Parallax from '../components/Parallax';
import ShowSection from '../components/ShowSection';
import Spotify from '../components/Spotify';
// import { fetchArticles } from '../utils/articles';
import { fetchEvents } from '../utils/events';

export async function getServerSideProps() {
  const events = await fetchEvents()
  // const articles = await fetchArticles()
  return {
    props: {
      events,
      articles:[]
    }
  }
}

export default function Home({ events, articles, setShowHeaderLogo, showHeaderLogo}) {

  setShowHeaderLogo(false)
  return (
    <div className={styles.container}>
      <Head>
        <title>Al Maul</title>
        <meta name="description" content="Music by Al Maul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Parallax />
      <MobileDiv />
      <Spotify />
      <ShowSection events={events}/>    
    </div>
  )
}
