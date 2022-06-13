
import { initializeApp } from 'firebase/app';
export const firebaseConfig = {
    apiKey: "AIzaSyAMmvavNKvHcrnigKt95iBWNqR72AJg1vI",
    authDomain: "react-gfg.firebaseapp.com",
    projectId: "react-gfg",
    storageBucket: "react-gfg.appspot.com",
    messagingSenderId: "314329151666",
    appId: "1:314329151666:web:fafedcc7b7ffff997b71ab",
    measurementId: "G-EQZE07PJ62"
  };

  const app = initializeApp(firebaseConfig);
  console.log(app.options)