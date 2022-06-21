export enum E_Request {
	destinations = "/destinations?populate=%2A",
	crew = "/crews?populate=%2A",
	technologies = "/technologies?populate=%2A"
}

export const SERVERURL = 'https://limitless-crag-33193.herokuapp.com'
const APIURL = `${SERVERURL}/api`

export const API = async (request: E_Request) => {
	const req  = await fetch(APIURL+request)
	const result = await req.json()
	if (!result.data || result.data.length === 0) throw new Error()
	return result
}
