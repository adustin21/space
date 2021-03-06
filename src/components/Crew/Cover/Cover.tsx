import React, { useEffect, useRef } from 'react'
import styles from './Cover.module.css'

interface I_Props {
	backgroundImageURL: string
}

function CoverC(props: I_Props) {
	const backEl = useRef<HTMLDivElement>(null)
	useEffect(()=>{
		if(!backEl.current) return

		backEl.current.classList.add(styles.container__out)
		setTimeout(()=>{
			if(!backEl.current) return

			backEl.current.style.backgroundImage =
			`url(${props.backgroundImageURL})`
			backEl.current.classList.remove(styles.container__out)
			backEl.current.classList.add(styles.container__in)
		}, 90)

	}, [props.backgroundImageURL])

	return <div
			ref={backEl}
			className={styles.container}/>
}

export default React.memo(CoverC)
