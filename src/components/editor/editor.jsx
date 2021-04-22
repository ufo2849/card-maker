import React from 'react';
import Cardedit_form from '../cardedit_form/cardedit_form';
import styles from './editor.module.css';

const Editor = (props) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {props.cards.map(card => (
            <Cardedit_form card={card}/>
        ))}
    </section>
    );

export default Editor;