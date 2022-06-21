import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API, E_Request } from "../../api/API"
import { RootState } from "../../app/store"
import { I_DestinationItem, I_DestinationState } from "./types"

const initialState: I_DestinationState = {
	status: "idle",
	destinations: []
}
export const fetchDestinations = createAsyncThunk("destinations/fetch", async () => {
	const result = await API(E_Request.destinations)
	return result.data as I_DestinationItem[]
})

const destinationsSlice = createSlice({
	initialState,
	name: "destinations",
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchDestinations.fulfilled, (state, action) => {
			state.destinations = action.payload
			state.status = "successed"
		})
		builder.addCase(fetchDestinations.pending, (state) => {
			state.status = "loading"
		})
		builder.addCase(fetchDestinations.rejected, (state) => {
			state.status = "failed"
		})
	},
})

export const selectDestination =
(state: RootState) => state.destinations

export default destinationsSlice.reducer
