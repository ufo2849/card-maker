import React, { useRef, useState } from 'react';
import { memo } from 'react';
import styles from './image_file_input.module.css';

const Image_file_input = memo((props) => {
    const [loading, setLoading]= useState(false);

    const inputRef= useRef();
    const onButtonClick= (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    const onChange = async event => {
        // console.log(event.target.files[0]);
        //파일이 변경될 때, setLoading을 true로 해주고
        setLoading(true);
        const uploaded= await props.imageUploader.upload(event.target.files[0]);
        //변경 다 된 후에는 다시 false로
        setLoading(false);
        // console.log(uploaded);
        props.onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        });
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
            {!loading && <button className={`${styles.button} ${props.name ? styles.pink:styles.grey}`}
            onClick={onButtonClick}>{props.name || "No file"}</button>}
            {loading && <div className={styles.loading}></div>}
        </div>
    )
});

export default Image_file_input;