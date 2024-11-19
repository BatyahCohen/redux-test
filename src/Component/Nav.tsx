"use client";

import Link from "next/link";
import styles from "./Nav.module.css"; 

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/Components/Minus" className={styles.navLink}>
            minus
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Components/Plus" className={styles.navLink}>
            plus
          </Link>
        </li>
      </ul>
    </nav>
  );
}
