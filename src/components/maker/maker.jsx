import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = (props) => {
    const history= useHistory();
    const Logout= () => {
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

    return (
        <section className={styles.maker}>
            <Header onLogout={Logout}/>
            <div className={styles.container}>
                <Editor />
                <Preview />
            </div>
            <Footer />
        </section>
    )
};

export default Maker;