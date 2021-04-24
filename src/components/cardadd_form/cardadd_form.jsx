import React, { useRef } from 'react';
import Add_button from '../add_button/add_button';
import Image_file_input from '../image_file_input/image_file_input';
import styles from './cardadd_form.module.css';

const Cardadd_form = (props) => {
    const nameRef= useRef();
    const companyRef= useRef();
    const themeRef= useRef();
    const jobRef= useRef();
    const emailRef= useRef();
    const messageRef= useRef();
    
    const inputvalue= input.current;

    return (
        <form className={styles.form}>
            <input className={styles.input} ref={nameRef} type="text" name="name" placeholder="Name"></input>
            <input className={styles.input} ref={companyRef} type="text" name="company" placeholder="Company"></input>
            <select className={styles.select} ref={themeRef} name="theme" placeholder="Theme">
                <option placeholder="light">Light</option>
                <option placeholder="dark">Dark</option>
                <option placeholder="colorful">Colorful</option>
            </select>
            <input className={styles.input} ref={jobRef} type="text" name="job" placeholder="Job"></input>
            <input className={styles.input} ref={emailRef} type="text" name="email" placeholder="Email"></input>
            <textarea className={styles.textarea} ref={messageRef} name="message" placeholder="Message"></textarea>
            <div className={styles.fileInput}>
                <Image_file_input />
            </div>
            <Add_button name='Add' value={inputvalue}  onAdd={props.onAdd}/>
        </form>
    );
};

export default Cardadd_form;