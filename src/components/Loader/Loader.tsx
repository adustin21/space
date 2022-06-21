import React from 'react'
import  styles from "./Loader.module.css"

interface I_Props {
	mode: "loading" | "failed" | "idle"
}

function Loader(props: I_Props) {
  return (
	<div className={`${styles.container} ${styles['container__'+props.mode]}`}>
		<div className={`${styles.planet}`}>
			<div className={styles.orbit1}></div>
			<div className={styles.orbit2}></div>
			<div className={styles.moon1}>an</div>
			<div className={styles.moon2}>error</div>
			occured<br/><br/>😢
		</div>
	</div>
  )
}

export default Loader
