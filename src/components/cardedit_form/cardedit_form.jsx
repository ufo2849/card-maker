import React from 'react';
import Button from '../button/button';
import Image_file_input from '../image_file_input/image_file_input';
import styles from './cardedit_form.module.css';

const Cardedit_form = (props) => {
    const {name, company, job, email, message, theme, fileName, fileURL}= props.card;
    const onSubmit = () => {
        props.deleteCard(props.card);
    };

    const onChange = (event) => {
        if (event.currentTarget == null){
            return;
        }
        // console.log(event.currentTarget.name);
        // console.log(event.currentTarget.value);
        event.preventDefault();
        props.updateCard( {...props.card,
            [event.currentTarget.name]: event.currentTarget.valule,
        });

    };

    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" 
            name="name" value={name} onChange={onChange}></input>
            <input className={styles.input} type="text" 
            name="company" value={company} onChange={onChange}></input>
            <select className={styles.select} 
            name="theme" value={theme} onChange={onChange}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} type="text" 
            name="job" value={job} onChange={onChange}></input>
            <input className={styles.input} type="text" 
            name="email" value={email} onChange={onChange}></input>
            <textarea className={styles.textarea} 
            name="message" value={message} onChange={onChange}></textarea>
            <div className={styles.fileInput}>
                <Image_file_input />
            </div>
            <Button name='Delete' onClick={onSubmit}/>
        </form>
    );
};

export default Cardedit_form;