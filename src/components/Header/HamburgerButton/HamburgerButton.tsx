import React, { MouseEventHandler } from 'react'
import styles from './HamburgerButton.module.css'

interface I_Props {
	mode: "hamburger" | "cross",
	changeMode: MouseEventHandler<HTMLButtonElement>
}

function HamburgerButton({mode, changeMode}: I_Props) {
	return (
		<button
		className={styles.container} onClick={changeMode}>
			{mode === "hamburger" ?
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg> :
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>}
		</button>
	)
}

export default HamburgerButton
