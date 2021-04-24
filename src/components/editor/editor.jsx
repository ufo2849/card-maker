import React from 'react';
import Cardadd_form from '../cardadd_form/cardadd_form';
import Cardedit_form from '../cardedit_form/cardedit_form';
import styles from './editor.module.css';

const Editor = (props) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {props.cards.map(card => (
            <Cardedit_form key={card.id} card={card}/>
        ))}
        <Cardadd_form onAdd={props.onAdd}/>
    </section>
    );

export default Editor;