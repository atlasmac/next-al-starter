import styles from '../styles/Home.module.css'

const ArticlesSection = ({ articles }) => {
  const articlesSection = articles.map(([href, title, description], i) => {
    return (
      <div
        className={styles.article}
        key={`articles${i}`}
      >

        <h3><a className={`${styles.coolLink} ${styles.artTitle}`} href={href}>{title}</a></h3>
        <p>{description} <a href={href} className={styles.articleA}>More</a></p>
      </div>
    )
  })
  return (
    <div className={styles.colorDiv}>
      <div className={styles.divs}>
      <div className={styles.titleDiv}>
       {articlesSection && <h2 className={styles.mediaTitle}>Media</h2>}
      </div>
        {articlesSection}
      </div>
    </div>

  )
}

export default ArticlesSection
