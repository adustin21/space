import React from 'react'
import { I_TechnologyItem } from '../../../features/technologies/types'
import styles from './Description.module.css'

interface I_Props {
	state: I_TechnologyItem,
	names: string[],
	setIndex: React.Dispatch<React.SetStateAction<number>>,
	index: number
}

function Description(props: I_Props) {
  return (
	<div className={styles.container}>
		<ul>
		{props.names.map((el, i) =>
		<li
		key={i}
		className={i===props.index?styles.active:""}
		onClick={()=>props.setIndex(i)}>
			<h4>{i+1}</h4>
		</li>)}
		</ul>
		<div className="navText">THE TERMINOLOGY…</div>
		<h3>{props.state.attributes.Name}</h3>
		<p>{props.state.attributes.Description}</p>

	</div>
  )
}

export default Description
