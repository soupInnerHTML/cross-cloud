import {makeAutoObservable} from 'mobx';
import auth from '@react-native-firebase/auth';

class Auth {
    uid;
    get isLoggedIn() {
        return !!this.uid;
    }

    check = () => {
        auth().onAuthStateChanged(user => (this.uid = user?.uid));
    };

    googleSignIn = async () => {
        let provider = new auth.GoogleAuthProvider();
        const data = await auth().signInWithPopup(provider);
        const {displayName, photoURL, uid, email, providerData} = data.user;

        this.uid = uid;

        console.log({
            displayName,
            photoURL,
            uid,
            email,
            from: providerData[0].providerId,
        });
    };

    signIn = async ({email, password}) => {
        const {user} = await auth().signInWithEmailAndPassword(email, password);

        // localStorage.setItem('uid', user.uid);
        this.uid = user.uid;
    };

    signUp = async ({email, password}) => {
        const {user} = await auth().createUserWithEmailAndPassword(
            email,
            password,
        );

        // localStorage.setItem('uid', user.uid);
        this.uid = user.uid;
    };

    exit = () => {
        // this.uid = null;
        // this.isLoggedIn = false;
        // localStorage.removeItem('uid');
    };

    constructor() {
        makeAutoObservable(this);
        this.check();
    }
}

export default new Auth();
