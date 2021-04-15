import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = (props) => {
    const history= useHistory();
    const goToMaker = (userId) => {
        history.push({
            pathname: '/maker',
            state: {id: userId},
        });
    }

    const onLogin = (event) => {
        props.auth.Login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    }

    useEffect(() => {
        props.auth.onAuthChange((user) => {
            user && goToMaker(user.uid);
        })
    });

    return (
        <section className={styles.login}>
            <Header />
                <section>
                    <h1>Login</h1>
                    <ul className={styles.list}>
                        <li className={styles.item}><button className={styles.button}
                        onClick={onLogin}>Google</button></li>
                        <li className={styles.item}><button className={styles.button}
                        onClick={onLogin}>Github</button></li>
                    </ul>
                </section>
            <Footer />
        </section>
    )
};

export default Login;