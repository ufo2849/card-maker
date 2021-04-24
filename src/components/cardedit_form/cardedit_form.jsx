import React from 'react';
import Button from '../button/button';
import Image_file_input from '../image_file_input/image_file_input';
import styles from './cardedit_form.module.css';

const Cardedit_form = (props) => {
    const {name, company, job, email, message, theme, fileName, fileURL}= props.card;
    const onSubmit = () => {

    }

    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name}></input>
            <input className={styles.input} type="text" name="company" value={company}></input>
            <select className={styles.select} name="theme" value={theme}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} type="text" name="job" value={job}></input>
            <input className={styles.input} type="text" name="email" value={email}></input>
            <textarea className={styles.textarea} name="message" value={message}></textarea>
            <div className={styles.fileInput}>
                <Image_file_input />
            </div>
            <Button name='Delete' onClick={onSubmit}/>
        </form>
    );
};

export default Cardedit_form;