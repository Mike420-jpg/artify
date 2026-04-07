import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBn-OxfVzZpCCpvIqRuhNbz2bwqDb1VFu4",
  authDomain: "artify-tip.firebaseapp.com",
  projectId: "artify-tip",
  storageBucket: "artify-tip.firebasestorage.app",
  messagingSenderId: "688132786169",
  appId: "1:688132786169:web:a4cddebea9b3becf669f28",
  measurementId: "G-K38B9CQXX9"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
