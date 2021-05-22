import {firebaseAuth, githubProvider, googleProvider} from './firebase';

class AuthService {
    Login(providerName) {
        const provider= this.getProvider(providerName); //class니까 this.
        return firebaseAuth.signInWithPopup(provider);
    }

    onAuthChange(onuserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onuserChanged(user);
        })
    }

    Logout() {
        return firebaseAuth.signOut();
    }

    getProvider(providerName) {
        switch(providerName) {
            case 'Google':
                return googleProvider;
            case 'Github':
                return githubProvider;
            default:
                throw new Error(`not supported provider: ${providerName}`);
        }
    }
}

export default AuthService;