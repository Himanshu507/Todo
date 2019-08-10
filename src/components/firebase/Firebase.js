import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBphk0NBqVqiCyIof5FsofRp2NhkaUi3Mk",
    authDomain: "todo-507.firebaseapp.com",
    databaseURL: "https://todo-507.firebaseio.com",
    projectId: "todo-507",
    storageBucket: "",
    messagingSenderId: "556929592259"
};
firebase.initializeApp(config);
export default firebase;