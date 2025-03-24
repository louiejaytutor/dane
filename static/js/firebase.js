import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import {
    getFirestore, collection, getDocs, doc, query, orderBy, addDoc, serverTimestamp, getDoc, updateDoc, deleteDoc
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyACGoc6lsu92SIBil2oA-FEfVkAocIpe00",
    authDomain: "todo-list-c310f.firebaseapp.com",
    projectId: "todo-list-c310f",
    storageBucket: "todo-list-c310f.firebasestorage.app",
    messagingSenderId: "1954381734",
    appId: "1:1954381734:web:466c42e5ddbcea8dcd1967",
    measurementId: "G-2RK9RRWMC2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);