import firebase from '@firebase/app';
import '@firebase/firestore';

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true,
});
export const jedisRef = db.collection('jedis');