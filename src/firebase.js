
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVDQVm2TNcBVVd1vLPxxpOFC85vKbel58",
  authDomain: "proyectoloyalty-82049.firebaseapp.com",
  projectId: "proyectoloyalty-82049",
  storageBucket: "proyectoloyalty-82049.appspot.com",
  messagingSenderId: "1005365615278",
  appId: "1:1005365615278:web:7b30bfdceb2cb30b40eb3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);