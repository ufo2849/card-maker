import React, { useRef } from 'react';
import Add_button from '../add_button/add_button';
import Image_file_input from '../image_file_input/image_file_input';
import styles from './add_form.module.css';

const Add_form = (props) => {
    const input= useRef(null);
    const inputvalue= input.current;

    return (
        <form className={styles.form}>
            <input className={styles.input} ref={input} type="text" name="name" value={inputvalue}></input>
            <input className={styles.input} type="text" name="company" ></input>
            <select className={styles.select} name="theme" >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="job" ></input>
            <input className={styles.input} type="text" name="email" ></input>
            <textarea className={styles.textarea} name="message" ></textarea>
            <div className={styles.fileInput}>
                <Image_file_input />
            </div>
            <Add_button name='Add' value={inputvalue}  onAdd={props.onAdd}/>
        </form>
    );
};

export default Add_form;