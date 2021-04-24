import React from 'react';
import Add_form from '../add_form/add_form';
import Cardedit_form from '../cardedit_form/cardedit_form';
import styles from './editor.module.css';

const Editor = (props) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {props.cards.map(card => (
            <Cardedit_form card={card}/>
        ))}
        <Add_form onAdd={props.onAdd}/>
    </section>
    );

export default Editor;