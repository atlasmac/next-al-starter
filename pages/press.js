import Head from "next/head"
import styles from '../styles/Home.module.css'
import ArticlesSection from "../components/ArticlesSection"
import About from "../components/About"
import PressPhoto from "../components/PressPhoto"
import { fetchArticles } from '../utils/articles';
// import { fetchEvents } from '../utils/events';
import OutsidePhoto from '../public/OutsidePortraitFall21.png'
import HarmonicaPhoto from '../public/Harmonicaphoto2019.png'

export async function getServerSideProps() {
  // const events = await fetchEvents()
  const articles = await fetchArticles()
  return {
    props: {
      events:[],
      articles
    }
  }
}
export default function Press({articles, setShowHeaderLogo, showHeaderLogo}) {
  setShowHeaderLogo(true)
  return (
    <div>
      <Head>
        <title>Press Bio</title>
        <meta name="About Al Maul Music" content="About Al Maul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PressPhoto src={OutsidePhoto}/>
      <About />
      <ArticlesSection articles={articles} />
      <PressPhoto src={HarmonicaPhoto}/>
    </div>
  )
}