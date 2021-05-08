import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = (props) => {
    const [cards, setCards] = useState({
        1: {
            id: '1',
            name: 'Ellie',
            company: 'Samsung Electronics',
            theme: 'dark',
            job: 'Software Engineer',
            email: 'dream.coder.ellie@gmail.com',
            message: 'Do not forget to code ur dream',
            fileName: 'ellie',
            fileURL: null,
        },
        2: {
            id: '2',
            name: 'Bob',
            company: 'Uber',
            theme: 'light',
            job: 'Senior Software Engineer',
            email: 'bog@uber.com',
            message: 'I love coding',
            fileName: 'ellie',
            fileURL: 'ellie.png',
        },
        3: {
            id: '3',
            name: 'Chris',
            company: 'Instagram',
            theme: 'colorful',
            job: 'Product Manager',
            email: 'christ@instagram.com',
            message: 'Design ur dream',
            fileName: 'ellie',
            fileURL: null,
        },
    });


    const history = useHistory();
    const Logout = () => {
        props.auth.Logout()
    };

    useEffect(() => {
        props.auth.onAuthChange(user => {
            if (user) {
                return
            }
            else {
                history.push('/');
            }
        });
    });

    // const Add = (info) => {
    //     const update= [...cards, info];
    //     setCards(update);
    //     // setCards(info);
    // }

    const createOrupdateCard = (card) => {
        const updated= {...cards};
        updated[card.id]= card;
        setCards(updated);
    };

    const deleteCard = (card) => {
        const updated= {...cards};
        delete updated[card.id]
        setCards(updated);
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={Logout} />
            <div className={styles.container}>
                <Editor cards={cards} onAdd={createOrupdateCard} 
                updateCard={createOrupdateCard}
                deleteCard={deleteCard}
                FileInput={props.FileInput}/>
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
};

export default Maker;