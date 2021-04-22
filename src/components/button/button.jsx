import React from 'react';
import styles from './button.module.css';

const Button = (props) => (
    <button className={styles.button} onClick={props.onClick}>
        {props.name}
    </button>
    );

export default Button;