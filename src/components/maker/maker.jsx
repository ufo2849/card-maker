import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = (props) => {
    //history안의 초기값으로 설정
    const historyState= useHistory().state;
    const [cards, setCards] = useState({});
    const [userId, setuserId]= useState(historyState && historyState.id);


    const history = useHistory();
    const Logout = () => {
        props.auth.Logout()
    };

    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync= props.cardRepository.syncCard(userId, cards => {
            setCards(cards);
        });
        return () => stopSync();
    }, [userId, props.cardRepository]);

    useEffect(() => {
        props.auth.onAuthChange(user => {
            if (user) {
                setuserId(user.uid);
            }
            else {
                history.push('/');
            }
        });
    }, [props.auth, history]);

    // const Add = (info) => {
    //     const update= [...cards, info];
    //     setCards(update);
    //     // setCards(info);
    // }

    const createOrupdateCard = (card) => {
        const updated= {...cards};
        updated[card.id]= card;
        setCards(updated);
        // console.log(userId);
        // console.log(card);
        // console.log(props.cardRepositry.saveCard);
        props.cardRepository.saveCard(userId, card);
    };

    const deleteCard = (card) => {
        const updated= {...cards};
        delete updated[card.id]
        setCards(updated);
        props.cardRepository.removeCard(userId, card);
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