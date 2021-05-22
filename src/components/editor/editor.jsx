import React from 'react';
import Cardaddform from '../cardadd_form/cardadd_form';
import Cardeditform from '../cardedit_form/cardedit_form';
import styles from './editor.module.css';

const Editor = (props) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {Object.keys(props.cards).map(key => (
            <Cardeditform key={key} FileInput={props.FileInput}
            card={props.cards[key]}
            updateCard={props.updateCard} deleteCard={props.deleteCard}/>
        ))}
        <Cardaddform onAdd={props.onAdd} FileInput={props.FileInput}/>
    </section>
    );

export default Editor;