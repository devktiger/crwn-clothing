import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCF_5xaRWbH-ERnn6ap7idvAJ8s6suWwD8',
	authDomain: 'crwn-db-78179.firebaseapp.com',
	databaseURL: 'https://crwn-db-78179.firebaseio.com',
	projectId: 'crwn-db-78179',
	storageBucket: '',
	messagingSenderId: '179317833947',
	appId: '1:179317833947:web:e8e74460ec0024f1'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
