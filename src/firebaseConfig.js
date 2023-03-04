import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA116ANw30APLHfFzkmD3KtiP-8Clqmpag",
  authDomain: "fsn-store.firebaseapp.com",
  projectId: "fsn-store",
  storageBucket: "fsn-store.appspot.com",
  messagingSenderId: "100503385768",
  appId: "1:100503385768:web:9ab9a5650899040291f49d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Initialize Authentication 
export const auth = getAuth(app);
