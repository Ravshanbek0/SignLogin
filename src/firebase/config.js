import firebase from "firebase";
import "firebase/storage"
import "firebase/auth"




const firebaseConfig = {
    apiKey: "AIzaSyAWucIF2zjEkBCZfmzRFBMsvPx-t7UYTCw",
    authDomain: "my-money-906c0.firebaseapp.com",
    projectId: "my-money-906c0",
    storageBucket: "my-money-906c0.appspot.com",
    messagingSenderId: "839525683567",
    appId: "1:839525683567:web:37e0aecada13e52a2a589a",
    measurementId: "G-HVYFHGNSBQ"
};

firebase.initializeApp(firebaseConfig)

const projectAuth=firebase.auth()

export {projectAuth}