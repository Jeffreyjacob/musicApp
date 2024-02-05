import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-mOXmL2tDWG8DDCNSHCdd6Ho5y7O7zuU",
    authDomain: "jetmusic-f4ef6.firebaseapp.com",
    projectId: "jetmusic-f4ef6",
    storageBucket: "jetmusic-f4ef6.appspot.com",
    messagingSenderId: "252023811446",
    appId: "1:252023811446:web:ed81128e1c442e01861e57",
    measurementId: "G-L5ZRJDWC07"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
