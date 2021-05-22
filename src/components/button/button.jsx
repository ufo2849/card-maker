import React, { memo } from 'react';
import styles from './button.module.css';

const Button = memo((props) => (
    <button className={styles.button} onClick={props.onClick}>
        {props.name}
    </button>
    ));

export default Button;