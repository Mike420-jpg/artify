import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiGohldZTbmYUkUtF3n0a8kTJF_NGlxVo",
  authDomain: "artifytip.firebaseapp.com",
  projectId: "artifytip",
  storageBucket: "artifytip.firebasestorage.app",
  messagingSenderId: "733176841835",
  appId: "1:733176841835:web:657b7b64550a04bb26132e",
  measurementId: "G-QSF0XXEEXZ"
};
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);