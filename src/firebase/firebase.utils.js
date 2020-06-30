import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBcsOg0sIsdYXkW1f_hspdLXkkQ5Qy2ACQ",
    authDomain: "crowndb-bf096.firebaseapp.com",
    databaseURL: "https://crowndb-bf096.firebaseio.com",
    projectId: "crowndb-bf096",
    storageBucket: "crowndb-bf096.appspot.com",
    messagingSenderId: "745393586244",
    appId: "1:745393586244:web:f1d05a96d4493fdf163c11",
    measurementId: "G-TKJ5Q9WMPT"
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...addtionalData
            })
        } catch (error) {
            console.log('error creating user ', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;