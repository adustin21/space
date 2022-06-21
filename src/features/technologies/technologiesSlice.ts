import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API, E_Request } from "../../api/API"
import { RootState } from "../../app/store"
import { I_TechnologyState } from "./types"

const initialState: I_TechnologyState = {
	status: "idle",
	technologies: []
}
export const fetchTechnologies = createAsyncThunk("technologies/fetch", async () => {
	const result = await API(E_Request.technologies)
	return result.data
})

const technologiesSlice = createSlice({
	initialState,
	name: "technologies",
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchTechnologies.fulfilled, (state, action) => {
			state.technologies = action.payload
			state.status = "successed"
		})
		builder.addCase(fetchTechnologies.pending, (state) => {
			state.status = "loading"
		})
		builder.addCase(fetchTechnologies.rejected, (state) => {
			state.status = "failed"
		})
	},
})

export const selectTecnologies = (state: RootState) => state.technologies

export default technologiesSlice.reducer
