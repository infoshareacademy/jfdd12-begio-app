import firebase from "firebase/app"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCk4uXi8WwSHqWFc_SvfdEjyn3CBsqyiMw",
    authDomain: "gogdansk-begio-app.firebaseapp.com",
    databaseURL: "https://gogdansk-begio-app.firebaseio.com",
    projectId: "gogdansk-begio-app",
    storageBucket: "",
    messagingSenderId: "919816780208",
    appId: "1:919816780208:web:510def1b7a38baf0"
}

// Initialize Firebase
const firebaseInit = firebase.initializeApp(firebaseConfig)
export default firebaseInit
