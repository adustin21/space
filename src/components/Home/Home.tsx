import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
	<div className={styles.container}>
    <div className={styles.description}>
      <h5>so, you want to travel to</h5>
      <h1>space</h1>
      <p>Let’s face it; if you want to go to
        space, you might as well genuinely go
        to outer space and not hover kind of
        on the edge of it. Well sit back, and
        relax because we’ll give you a truly out
        of this world experience!
      </p>
    </div>
    <Link to="/destination" className={styles.exploreButton}>
      <h4>explore</h4>
    </Link>
  </div>
  )
}

export default Home
