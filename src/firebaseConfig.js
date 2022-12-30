import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyCxWtbM8Gey36ISgOjTiY8TthoCaxozpuk",
    authDomain: "todologin-368823.firebaseapp.com",
    projectId: "todologin-368823",
    storageBucket: "todologin-368823.appspot.com",
    messagingSenderId: "278289515312",
    appId: "1:278289515312:web:1ec88cbb4a004ec95afef5",
    measurementId: "G-ESXT13QPWX"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)