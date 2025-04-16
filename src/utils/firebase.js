import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'multi-rps-cd56d.firebaseapp.com',
    databaseURL: 'https://multi-rps-cd56d-default-rtdb.firebaseio.com/',
    projectId: 'multi-rps-cd56d',
    storageBucket: 'multi-rps-cd56d.appspot.com',
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: '1:309281822897:web:81aa3e8458154811f36a90',
    measurementId: 'G-5L5YJBPDFD',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const playersRef = ref(db, 'players');
export const playerOneRef = ref(db, 'players/1');
export const playerTwoRef = ref(db, 'players/2');
export const turnRef = ref(db, 'turn');
export const chatRef = ref(db, 'chat');
