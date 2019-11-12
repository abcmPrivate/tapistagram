import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDkRp6OUzS4J32OJRtozGJE_C12DyQlkQU",
        authDomain: "tapistagram.firebaseapp.com",
        databaseURL: "https://tapistagram.firebaseio.com",
        projectId: "tapistagram",
        storageBucket: "tapistagram.appspot.com",
        messagingSenderId: "296113827901",
        appId: "1:296113827901:web:fcef7e0fd0191700c8fa54",
        measurementId: "G-QRQV6LV3N3"
    })
}

export default firebase