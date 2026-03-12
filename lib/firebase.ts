import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1PQPZW5_pqVpqI6_BeARc4IGmhOPPHa8",
  authDomain: "rizzerv-2537c.firebaseapp.com",
  projectId: "rizzerv-2537c",
  storageBucket: "rizzerv-2537c.firebasestorage.app",
  messagingSenderId: "771396834587",
  appId: "1:771396834587:web:3f4a838dfa71b419a2afbe",
  measurementId: "G-X29MWV3S2Y",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
