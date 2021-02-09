import firebase from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyBzuaP7lm-DswoFFRXfjuvPN-SosMIs0AI",
	authDomain: "restaurant-aa6f4.firebaseapp.com",
	projectId: "restaurant-aa6f4",
	storageBucket: "restaurant-aa6f4.appspot.com",
	messagingSenderId: "342047284963",
	appId: "1:342047284963:web:3b1c6147f625ec21006fd6",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
