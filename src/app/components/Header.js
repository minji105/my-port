"use client";

import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';

function Nav() {
  const pathname = usePathname();

  return (
    <div className={styles.header}>
      <span className={styles.logo}>CHO MINJI</span>
      <span>Developer</span>
      <ul>
        <li><a href="/" className={pathname === '/' ? styles.active : ''}>About</a></li>
        <li><a href="/projects" className={pathname.startsWith('/projects') ? styles.active : ''}>Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <span>Dark mode</span>
    </div>
  )
}

export default Nav;