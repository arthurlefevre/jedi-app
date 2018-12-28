import * as firebase from 'firebase';
require("firebase/firestore");

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true,
});
export const jedisRef = db.collection('jedis');