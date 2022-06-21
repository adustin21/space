import React from 'react'
import { I_CrewItem } from '../../../features/crew/types'
import styles from './Description.module.css'

interface I_Props {
	state: I_CrewItem,
	names: string[],
	setIndex: React.Dispatch<React.SetStateAction<number>>,
	index: number
}

function Description(props: I_Props) {
  return (
	<div className={styles.container}>
		<h4>{props.state.attributes.Role}</h4>
		<h3>{props.state.attributes.Name}</h3>
		<p>{props.state.attributes.Biography}</p>
		<ul>
		{props.names.map((el, i) =>
		<li
		key={i}
		className={i===props.index?styles.active:""}
		onClick={()=>props.setIndex(i)}/>)}
		</ul>
	</div>
  )
}

export default Description
