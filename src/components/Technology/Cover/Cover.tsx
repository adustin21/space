import React, { useEffect, useRef } from 'react'
import { SERVERURL } from '../../../api/API'
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
			`url(${SERVERURL}${props.backgroundImageURL})`
			backEl.current.classList.remove(styles.container__out)
			backEl.current.classList.add(styles.container__in)
		}, 90)

	}, [props.backgroundImageURL])
	const resultUrl =
		`url(${props.backgroundImageURL})`

	return <div
			ref={backEl}
			className={styles.container}/>
}

export default React.memo(CoverC)
