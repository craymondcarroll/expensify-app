import * as firebase from 'firebase';



const config = {
    apiKey: "",
    authDomain: "expense-tracker-b9209.firebaseapp.com",
    databaseURL: "https://expense-tracker-b9209.firebaseio.com",
    projectId: "expense-tracker-b9209",
    storageBucket: "expense-tracker-b9209.appspot.com",
    messagingSenderId: ""
};

firebase.initializeApp(config);


firebase.database().ref().set({
    name: 'C. Raymond Carroll'

});
