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

const database = firebase.database();


database.ref().set({
    name: 'Johnny Quest',
    age: 65,
    isSingle: false,
    location: {
        city: 'Washington',
        state: 'DC',
       country: 'United States'
    }
}).then( ()=> {
    console.log("The data successfully saved ");
}).catch( (error)=> {
    console.log("The following error occurred: ", error);
})


database.ref('age').set(41);
database.ref('location/city').set('stafford');
database.ref('location/state').set('VA');

database.ref('attributes').set({
    height: "5'9",
    weight: 190
});

