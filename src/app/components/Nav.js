"use client";

import { usePathname } from 'next/navigation';
import styles from './Nav.module.scss';

function Nav() {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      <ul>
        <li><a href="/" className={pathname === '/' ? styles.active : ''}>About</a></li>
        <li><a href="/projects" className={pathname === '/projects' ? styles.active : ''}>Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Nav;