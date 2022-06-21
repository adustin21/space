export interface I_CrewItem {
	id: number,
	attributes:{
		Biography: string,
		Photo: {data: {attributes: {url: string}}}
		Role: string,
		Name: string,
	}
}
export interface I_CrewState {
	status: "idle" | "loading" | "successed" | "failed"
	crew: I_CrewItem[]
}
