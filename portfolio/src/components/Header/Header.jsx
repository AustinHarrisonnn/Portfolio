import React from 'react';
import styles from './Header.module.css'; // ✅ Corrected import

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <h1>Austin Harrison</h1> <h1>/ Portfolio</h1>
            </div>
            <div className={styles.navLinks}>
                <ul>
                    <li><a href='#'>Github</a></li>
                    <li><a href='#'>LinkedIn</a></li>
                    <li><a href='#'>Resume</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;