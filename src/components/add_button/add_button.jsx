import React from 'react';
import styles from './add_button.module.css';

const Add_button = (props) => (
    <button className={styles.button} onClick={() => props.onAdd(props.value)}>
        {props.name}
    </button>
    );

export default Add_button;