import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Menu.module.css"

interface I_Props {
	isHidden: boolean,
}

function Menu({isHidden}: I_Props) {
	const classes = `${styles.container} ${isHidden?styles.container__hidden:""} navText`
	const navLinkClass = ({isActive}: {isActive: boolean}) => isActive?styles.active:""
	return (
		<ul className={classes}>
			<NavLink className={navLinkClass} to='/'><li><b>01</b>&nbsp;Home</li></NavLink>
			<NavLink className={navLinkClass} to='/destination'><li><b>02</b>&nbsp;Destination</li></NavLink>
			<NavLink className={navLinkClass} to='/crew'><li><b>03</b>&nbsp;Crew</li></NavLink>
			<NavLink className={navLinkClass} to='/technology'><li><b>04</b>&nbsp;Technology</li></NavLink>
		</ul>
	)
}

export default Menu
