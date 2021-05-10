import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const Image_file_input = (props) => {
    const inputRef= useRef();
    const onButtonClick= (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    const onChange = (event) => {
        console.log(event.target.files[0]);
        props.imageUploader.upload(event.target.files[0])
        .then(console.log);
        props.onFileChange({
            name: 'fileName',
            url: 'url'
        })
    }

    return (
        <div className={styles.container}>
            <input className={styles.input} 
            ref= {inputRef}
            type="file" 
            accept="image/*" 
            name="file"
            onChange= {onChange}>
            </input>
            <button className={styles.button} onClick={onButtonClick}>
                {props.name || "No file"}</button>
        </div>
    )
};

export default Image_file_input;