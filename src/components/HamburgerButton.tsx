import React from 'react'
import { useStore } from '../store/useStore'
import styles from '/styles/HamburgerButton.module.css'

export function HamburgerButton() {
    const { openMenu, setOpenMenu } = useStore()

    return (
        <div
            className={[styles.navIcon, openMenu && styles.open].join(' ')}
            onClick={() => setOpenMenu(!openMenu)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
