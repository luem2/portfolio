import React from 'react';
import styles from '/styles/HamburgerButton.module.css';

export function HamburgerButton({ activeMenu }) {
  const [openMenu, setOpenMenu] = activeMenu;

  return (
    <div
      className={[styles.navIcon, openMenu && styles.open].join(' ')}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
