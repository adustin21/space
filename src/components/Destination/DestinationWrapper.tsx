import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectDestination } from '../../features/destination/destinationSlice'
import { I_DestinationItem } from '../../features/destination/types'
import Loader from '../Loader/Loader'
import Destination from './Destination'

function DestinationWrapper() {
	console.log("destination render")
	const state = useSelector(selectDestination)
	const [index, setIndex] = useState(0)
	const names = state.destinations.map((el: I_DestinationItem) => el.attributes.Name)
	return (
	<React.Fragment>
		{state.status === "successed"?
		<Destination
		state={state.destinations[index]}
		names={names}
		index={index}
		setIndex={setIndex}/>:
		<Loader mode={state.status}/>
		}
	</React.Fragment>
	)
}

export default DestinationWrapper
