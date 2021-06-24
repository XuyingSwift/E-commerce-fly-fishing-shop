import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBIeeasQ_ZbkCRy7_XcRjmn0QGEYxuW2RE",
    authDomain: "fly-fishing-shop.firebaseapp.com",
    projectId: "fly-fishing-shop",
    storageBucket: "fly-fishing-shop.appspot.com",
    messagingSenderId: "661026024676",
    appId: "1:661026024676:web:49e03496b8139b7f5650f1",
    measurementId: "G-L8GJ9LS1SW"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach(object => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, object)
    });

    return await batch.commit();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;