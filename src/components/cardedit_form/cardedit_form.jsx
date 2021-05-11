import React, { useRef } from 'react';
import Button from '../button/button';
// import Image_file_input from '../image_file_input/image_file_input';
import styles from './cardedit_form.module.css';

const Cardedit_form = (props) => {
    const nameRef= useRef();
    const companyRef= useRef();
    const themeRef= useRef();
    const jobRef= useRef();
    const emailRef= useRef();
    const messageRef= useRef();

    const {name, company, job, email, message, theme, fileName, fileURL}= props.card;
    const onSubmit = () => {
        props.deleteCard(props.card);
    };

    const onFileChange = (file) => {
        props.updateCard({
            ...props.card,
            fileName: file.name,
            fileURL: file.url,
        });
    }

    const onChange = (event) => {
        if (event.currentTarget == null){
            return;
        }
        event.preventDefault();
        props.updateCard( {...props.card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    return (
        <form className={styles.form}>
            <input className={styles.input} ref={nameRef} type="text" 
            name="name" value={name} onChange={onChange}></input>
            <input className={styles.input} ref={companyRef} type="text" 
            name="company" value={company} onChange={onChange}></input>
            <select className={styles.select} ref={themeRef} 
            name="theme" value={theme} onChange={onChange}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} ref={jobRef} type="text" 
            name="job" value={job} onChange={onChange}></input>
            <input className={styles.input} ref={emailRef} type="text" 
            name="email" value={email} onChange={onChange}></input>
            <textarea className={styles.textarea} ref={messageRef} 
            name="message" value={message} onChange={onChange}></textarea>
            <div className={styles.fileInput}>
                <props.FileInput name={fileName} onFileChange={onFileChange}/>
            </div>
            <Button name='Delete' onClick={onSubmit}/>
        </form>
    );
};

export default Cardedit_form;