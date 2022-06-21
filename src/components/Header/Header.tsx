import React, { useState } from 'react'
import HamburgerButton from './HamburgerButton/HamburgerButton'
import styles from './Header.module.css'
import Menu from './Menu/Menu'

function Header() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div
		onClick={()=>{if(isOpen)setIsOpen(false)}}
		className={styles.container}>
			<div className={styles.logo}>
			<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
			</div>
			<HamburgerButton
			mode={isOpen?"cross":"hamburger"}
			changeMode={()=>setIsOpen(!isOpen)}/>
			<Menu isHidden={!isOpen}/>
		</div>
	)
}

export default Header
