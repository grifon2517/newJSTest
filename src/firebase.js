
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAyWGzOrznd5K_J2XXORoc_3_d7DbZ64-M",
  authDomain: "todo-eb9fe.firebaseapp.com",
  projectId: "todo-eb9fe",
  storageBucket: "todo-eb9fe.firebasestorage.app",
  messagingSenderId: "794108458419",
  appId: "1:794108458419:web:36f91f2d07051fdb2a87c6",
  databaseURL: "https://todo-eb9fe-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
