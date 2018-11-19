import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBpI0uZrfUPiTUu7hyhTRkn_4lakZ3Ty64",
    authDomain: "catch-of-the-day-britt-mo.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-britt-mo.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;
