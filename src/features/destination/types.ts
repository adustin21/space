export interface I_DestinationItem {
	id: number,
	attributes:{
		Cover: {data: {attributes: {url: string}}}
		Description: string,
		Distance: string,
		Name: string,
		TravelTime: string
	}
}
export interface I_DestinationState {
	status: "idle" | "loading" | "successed" | "failed"
	destinations: I_DestinationItem[]
}
