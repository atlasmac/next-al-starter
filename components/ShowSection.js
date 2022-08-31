import styles from '../styles/Home.module.css'


const ShowSection = ({ events }) => {

  const upComingShows = events.map((e, i) => {
    return (
      <div
        className={styles.showDiv}
        key={`event${i}`}
        {...e}
      >
        <div className={styles.location}>
          <h3 className={styles.date}> {new Date(e.start.dateTime).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric" })}</h3>
          <p className={styles.city}>{e.location} </p>
          <p id="venue" className={styles.venue}> {e.venue}</p>
          <p> {e.des}</p>
        </div>

        <div className={styles.venueInfo}>
          <a href={e.link} className={`${styles.coolLink} ${styles.tickets}`}> Venue & Ticket </a>
        </div>
      </div>
    )
  })
  return (
    <div className={`${styles.divs} ${styles.showsSection}`} id="shows-section">
      <div className={styles.titleDiv}>
      <h2>Upcoming Shows</h2>
      </div>
      {upComingShows}
      {upComingShows.length < 1 && <h3 className={styles.titleDiv}>Please check back soon!</h3>}
    </div>

  )
}

export default ShowSection
