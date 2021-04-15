import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
    <header className={styles.header}>
        {props.onLogout && <button className={styles.signOut} onClick={() => {
            props.onLogout()}}>SignOut</button>}
        <img className={styles.logo} src="/images/logo.png" alt="logo"></img>
        <h1 className={styles.title}>Business Card Maker</h1>
    </header>
    );

export default Header;