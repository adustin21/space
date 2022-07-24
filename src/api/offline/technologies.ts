import { I_TechnologyItem } from "../../features/technologies/types";

export const technologies: I_TechnologyItem[] = [
	{
		"id": 1,
		"attributes": {
			"Name": "LAUNCH VEHICLE",
			"Description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
			"Cover": {"data": {"attributes": {
				"url": "https://res.cloudinary.com/dyrmymiuq/image/upload/v1656155347/image_launch_vehicle_portrait_c0fd785761.jpg"
			}}}
		}
	},
	{
		"id": 2,
		"attributes": {
			"Name": "SPACEPORT",
			"Description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
			"Cover": {"data": {"attributes": {
				"url": "https://res.cloudinary.com/dyrmymiuq/image/upload/v1658514223/image_spaceport_portrait_bd3b3b8fa2.jpg"
			}}}
		}
	},
	{
		"id": 3,
		"attributes": {
			"Name": "SPACE CAPSULE",
			"Description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
			"Cover": {"data": {"attributes": {
				"url": "https://res.cloudinary.com/dyrmymiuq/image/upload/v1658514223/image_space_capsule_portrait_4b6a3cb713.jpg"
			}}}
		}
	}
]
