import React from 'react'
import { useSwipeable } from "react-swipeable";
import CoverC from './Cover/Cover'
import Description from './Description/Description'
import styles from './Technology.module.css'
import Header from './Header/Header'
import { I_TechnologyItem } from '../../features/technologies/types';

interface I_Props {
	state: I_TechnologyItem,
	names: string[],
	setIndex: React.Dispatch<React.SetStateAction<number>>,
	index: number
}

function Technology(props: I_Props) {
	const i = props.index;
	const iLimit = props.names.length - 1
	const swipes = useSwipeable({
		onSwipedRight: ()=>props.setIndex(i?i-1:i),
		onSwipedLeft: ()=>props.setIndex(i<iLimit?i+1:i)
	})
	return (
	<div
	{...swipes}
	className={styles.container}>
		<Header />
		<CoverC
		backgroundImageURL =
		{props.state.attributes.Cover.data.attributes.url}/>
		<Description {...props} />
	</div>
	)
}

export default Technology
