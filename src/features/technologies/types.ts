export interface I_TechnologyItem {
	id: number,
	attributes:{
		Cover: {data: {attributes: {url: string}}}
		Description: string,
		Name: string,
	}
}

export interface I_TechnologyState {
	status: "idle" | "loading" | "successed" | "failed"
	technologies: I_TechnologyItem[]
}
