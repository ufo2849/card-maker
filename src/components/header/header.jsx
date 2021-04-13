import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
    <header className={styles.header}>
        {props.signOut && <button className={styles.signOut} onClick={() => {
            props.signOut()
        }}>SignOut</button>}
        <img className={styles.logo} src="/images/logo.png" alt="logo"></img>
        <h1 className={styles.title}>Business Card Maker</h1>
    </header>
    );

export default Header;