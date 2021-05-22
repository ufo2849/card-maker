import React, { memo, useRef, useState } from 'react';
import Button from '../button/button';
// import Image_file_input from '../image_file_input/image_file_input';
import styles from './cardadd_form.module.css';

const Cardaddform = memo((props) => {
    const formRef= useRef();
    const nameRef= useRef();
    const companyRef= useRef();
    const themeRef= useRef();
    const jobRef= useRef();
    const emailRef= useRef();
    const messageRef= useRef();
    const [file, setFile]= useState({fileName: null, fileURL: null});

    const onFileChange = (file) => {
        console.log(file);
        setFile({
            fileName: file.name,
            fileURL: file.url,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const card= {
            id: Date.now(),
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            theme: themeRef.current.value,
            job: jobRef.current.value || '' ,
            email: emailRef.current.value|| '' ,
            message: messageRef.current.value || '',
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        };
        formRef.current.reset();
        // console.log(card);
        setFile({fileName: null, fileURL: null});
        props.onAdd(card);
    };

    return (
        <form className={styles.form} ref={formRef}>
            <input className={styles.input} ref={nameRef} type="text" name="name" placeholder="Name"></input>
            <input className={styles.input} ref={companyRef} type="text" name="company" placeholder="Company"></input>
            <select className={styles.select} ref={themeRef} name="theme" placeholder="Theme">
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <input className={styles.input} ref={jobRef} type="text" name="job" placeholder="Job"></input>
            <input className={styles.input} ref={emailRef} type="text" name="email" placeholder="Email"></input>
            <textarea className={styles.textarea} ref={messageRef} name="message" placeholder="Message"></textarea>
            <div className={styles.fileInput}>
                <props.FileInput name={file.fileName} onFileChange={onFileChange}/>
            </div>
            <Button name='Add' onClick={onSubmit}/>
        </form>
    );
});

export default Cardaddform;