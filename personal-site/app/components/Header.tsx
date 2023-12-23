import React from "react"
import styles from "@/app/styles/header.module.css"

const Header = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.brandContainer}>
        {/* <h1 className={`${styles.brand}`}>Nate</h1> */}
      </div>
      <div className={styles.menuContainer}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>About</li>
          <li className={styles.menuItem}>Photography</li>
          <li className={styles.menuItem}>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
