import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API, E_Request } from "../../api/API"
import { RootState } from "../../app/store"
import { I_CrewItem, I_CrewState } from "./types"

const initialState: I_CrewState = {
	status: "idle",
	crew: []
}
export const fetchCrew = createAsyncThunk("crew/fetch", async () => {
	const result = await API(E_Request.crew)
	return result.data as I_CrewItem[]
})

const crewSlice = createSlice({
	initialState,
	name: "crew",
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchCrew.fulfilled, (state, action) => {
			state.crew = action.payload
			state.status = "successed"
		})
		builder.addCase(fetchCrew.pending, (state) => {
			state.status = "loading"
		})
		builder.addCase(fetchCrew.rejected, (state) => {
			state.status = "failed"
		})
	},
})

export const selectCrew = (state: RootState) => state.crew

export default crewSlice.reducer
