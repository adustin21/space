import React from 'react'
import { I_DestinationItem } from '../../../features/destination/types'
import styles from './Description.module.css'

interface I_Props {
	state: I_DestinationItem,
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
			{el}
		</li>)}
		</ul>
		<h2>{props.state.attributes.Name}</h2>
		<p>{props.state.attributes.Description}</p>
		<div className={styles.subInfo}>
			<div className="subHeading2">
				AVG. DISTANCE
			</div>
			<div className="subHeading1">
				{props.state.attributes.Distance}
			</div>
		</div>
		<div className={styles.subInfo}>
			<div className="subHeading2">
				Est. travel time
			</div>
			<div className="subHeading1">
				{props.state.attributes.TravelTime}
			</div>
		</div>
	</div>
  )
}

export default Description
