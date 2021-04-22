import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = (props) => (
    <section className={styles.preview}>
        <h1 className={styles.title}>Card Preview</h1>
        <ul className={styles.cards}>
            {props.cards.map(card => (
                <Card card={card}/>
            ))}
        </ul>
    </section>
    );

export default Preview;