import { I_CrewItem } from "../features/crew/types";
import { I_DestinationItem } from "../features/destination/types";
import { I_TechnologyItem } from "../features/technologies/types";
import { crew } from "./offline/crew";
import { destinations } from "./offline/destinations";
import { technologies } from "./offline/technologies";

export enum E_Request {
	destinations = "/destinations?populate=%2A",
	crew = "/crews?populate=%2A",
	technologies = "/technologies?populate=%2A"
}

export const SERVERURL = `https://desolate-ocean-57849.herokuapp.com`

export const API:
(request: E_Request) => Promise<
{data: I_DestinationItem[]} |
{data: I_TechnologyItem[]} |
{data: I_CrewItem[]}
>
 = async (request) => {
	switch (request) {
		case E_Request.destinations:
			return ({data: destinations})
		case E_Request.crew:
			return ({data: crew})
		case E_Request.technologies:
			return ({data: technologies})
	}
}
