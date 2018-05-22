import * as firebase from 'firebase';



const config = {
    apiKey: "AIzaSyB-U3pUpHo-n4FzYZiJmit_ldAuWyei6qI",
    authDomain: "expense-tracker-b9209.firebaseapp.com",
    databaseURL: "https://expense-tracker-b9209.firebaseio.com",
    projectId: "expense-tracker-b9209",
    storageBucket: "expense-tracker-b9209.appspot.com",
    messagingSenderId: "567676521368"
};

firebase.initializeApp(config);


firebase.database().ref().set({
    name: 'C. Raymond Carroll'

});