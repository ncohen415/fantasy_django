import React from 'react'
import styles from '@/styles/Header.module.css'

const Header = () => {
    return (
        <header className={`${styles.header}`}>
            <div>
                <h3>
                    Nate L. Cohen
                </h3>
            </div>
        </header>
    )
}

export default Header