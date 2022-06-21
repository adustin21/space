import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTecnologies } from '../../features/technologies/technologiesSlice'
import { I_TechnologyItem } from '../../features/technologies/types'
import Loader from '../Loader/Loader'
import Technology from './Technology'

function TechnologyWraper() {
	const state = useSelector(selectTecnologies)
	const [index, setIndex] = useState(0)
	const names = state.technologies.map((el: I_TechnologyItem) => el.attributes.Name)
	return (
	<React.Fragment>
		{state.status === "successed"?
		<Technology
		state={state.technologies[index]}
		names={names}
		index={index}
		setIndex={setIndex}/>:
		<Loader mode={state.status}/>
		}
	</React.Fragment>
	)
}

export default TechnologyWraper
