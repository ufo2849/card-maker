import React from 'react';
import styles from './image_file_input.module.css';

const Image_file_input = (props) => {
    return (
        <div className={styles.container}>
            <input className={styles.input} 
            type="file" accept="image/*" name="file"></input>
            <button className={styles.button} onClick={onButtonClick}>
                {props.name || "No file"}</button>
        </div>
    )
};

export default Image_file_input;