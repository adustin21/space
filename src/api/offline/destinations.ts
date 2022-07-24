import { I_DestinationItem } from "../../features/destination/types";

export const destinations: I_DestinationItem[] = [
	{
        "id": 1,
        "attributes": {
            "Description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            "Distance": "384,400 km",
            "Name": "Moon",
            "TravelTime": "3 days",
			"Cover": {"data": {"attributes": {
                "url": "https://res.cloudinary.com/dyrmymiuq/image/upload/v1656154882/image_moon_a4642a8ef4.webp"
            }}}
        }
    },
    {
        "id": 2,
        "attributes": {
            "Description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            "Distance": "225 MIL. km",
            "Name": "Mars",
            "TravelTime": "9 months",
			"Cover": {"data": {"attributes": {
                "url": "https://res.cloudinary.com/dyrmymiuq/image/upload/v1656156159/image_mars_88f5f58893.webp"
            }}}
        }
    },
    {
        "id": 3,
        "attributes": {
            "Description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            "Distance": "628 MIL. km",
            "Name": "EUROPA",
            "TravelTime": "3 years",
			"Cover": {"data": {"attributes": {
                "url": "https://res.cloudinary.com/dyrmymiuq/image/upload/v1658513861/image_europa_89f3b74968.webp"
            }}}
        }
    },
    {
        "id": 4,
        "attributes": {
            "Description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            "Distance": "1.6 BIL. km",
            "Name": "TITAN",
            "TravelTime": "7 years",
			"Cover": {"data": {"attributes": {
                "url": "https://res.cloudinary.com/dyrmymiuq/image/upload/v1658513861/image_titan_edb7fc9f47.webp"
            }}}
        }
    }
]
