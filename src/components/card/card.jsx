import React from 'react';
import styles from './card.module.css';

const default_image= '/images/default_logo.png';
const Card = (props) => {
    const {name, company, job, email, message, theme, fileName, fileURL}= props.card;
    const url= fileURL || default_image;

    return (
        <li className={`${styles.card} ${pickStyles(theme)}`}>
            <img className={styles.avatar} src= {url} alt="profile photo"></img>
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.company}>{company}</p>
                <p className={styles.job}>{job}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    );
};

function pickStyles(theme) {
    switch(theme) {
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error(`unknown theme: ${theme}`);
    }
}

export default Card;