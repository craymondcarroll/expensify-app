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

const database = firebase.database();

/*




/*
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
*/

database.ref("isSingle").set(true).then( ()=>{
    console.log("Update worked");
}).catch( (error) => {

<<<<<<< HEAD
   console.log("We be erroring");
});

*/


/*database.ref('age').set(41);
=======
/*
database.ref('age').set(41);
>>>>>>> 9398a007b80cc9d4c294f2533c61ddf93de8a466
database.ref('location/city').set('stafford');
database.ref('location/state').set('VA');

database.ref('attributes').set({
    height: "5'9",
    weight: 190
});
*/


/*

database.ref().update({
    age: 50,
    name: "Raymond Carroll",
    job: "Software Developer",
    isSingle:null
}).then( ()=>{
    console.log("Update Worked");
}).catch( (error) =>{
    console.log("Dude, we have an error");

});


/*
database.ref().update({
   job: 'Manager',
   'location/city': 'Boston'
}).then( ()=>{
    console.log("Update Worked");
}).catch( (error) =>{
    console.log("Dude, we have an error");

});*/



/*
//--- Read data once
database.ref()
    .once('value')
    .then( (snapshot)=>{

    const myData = snapshot.val();
    console.log(myData);

}).catch( (e)=>{
    console.log("Error: ",e);
});

*/


//--- Read data whenever it changes
// we have to use a callback and not
// promises because promises get called
// once.

/*
const onValueChange = database.ref()
    .on('value', (snapshot)=>{
        const myData = snapshot.val();
        console.log(myData);
    }, (e)=>{

        console.log("Error Fetching: ",e);

    });

setTimeout( ()=>{
    database.ref("age").set(45);
},4000);



setTimeout( ()=>{
    database.ref().off();

},7000);


setTimeout( ()=>{
    database.ref("age").set(55);
},10000);


*/

/*
database.ref("expenses").set(null);


database.ref("expenses").push( {

   description: 'January Gas Bill',
   note: 'We used more heat this month',
   amount: 15000,
   createdAt: 304444

});

database.ref("expenses").push( {

    description: 'February Rent',
    note: 'Tell owner oven is not working',
    amount: 18000,
    createdAt: 404444

});

database.ref("expenses").push( {

    description: 'Take Out',
    note: 'ST Louis Bread',
    amount: 3500,
    createdAt: 305655

});

*/

/*
database.ref("expenses")
    .once("value")
    .then( (snapshot)=>{

        const expenses = [];
        snapshot.forEach( (childSnapShot) => {
           expenses.push( {
             id:childSnapShot.key,
               ...childSnapShot.val()
           });

        });


        console.log(expenses);
    });



*/

const onExpenseChange = database.ref("expenses")
    .on('value', (SnapShot)=>{
      const expenses = [];
        SnapShot.forEach( (childSnapShot)=>{

            expenses.push({
              id:childSnapShot.key,
                ...childSnapShot.val()
            });
        });

        console.log(expenses);

    }, (e)=>{
      console.log("Error Fetching: ",e);

    });


*/

database.ref('isSingle').remove().then( ()=>{
    console.log("isSingle Removed successfully");
}).catch( (error)=> {
   console.log("Error: ", error) ;

});