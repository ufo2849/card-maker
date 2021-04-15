import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useHistory } from 'react-router';

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
            <Footer />
        </section>
    )
};

export default Maker;