import firebase from "firebase/app";
import "firebase/auth";
import firebaseApp from './firebase';

class AuthService {
    Login(providerName) {
        const provider= new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(provider);
    }

    onAuthChange(onuserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onuserChanged(user);
        })
    }

    Logout() {
        return firebaseApp.auth().signOut();
    }
}

export default AuthService;