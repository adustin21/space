import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCrew } from '../../features/crew/crewSlice'
import { I_CrewItem } from '../../features/crew/types'
import Loader from '../Loader/Loader'
import Crew from './Crew'

function CrewWraper() {
	const state = useSelector(selectCrew)
	const [index, setIndex] = useState(0)
	const names = state.crew.map((el: I_CrewItem) => el.attributes.Name)
	return (
	<React.Fragment>
		{state.status === "successed"?
		<Crew
		state={state.crew[index]}
		names={names}
		index={index}
		setIndex={setIndex}/>:
		<Loader mode={state.status}/>
		}
	</React.Fragment>
	)
}

export default CrewWraper
