import React from 'react'
import { I_DestinationItem } from '../../features/destination/types'
import CoverC from './Cover/Cover'
import Description from './Description/Description'
import styles from './Destination.module.css'
import Header from './Header/Header'

interface I_Props {
	state: I_DestinationItem,
	names: string[],
	setIndex: React.Dispatch<React.SetStateAction<number>>,
	index: number
}

function Destination(props: I_Props) {
	return (
	<div className={styles.container}>
		<Header />
		<CoverC
		backgroundImageURL =
		{props.state.attributes.Cover.data.attributes.url}/>
		<Description {...props} />
	</div>
	)
}

export default Destination
