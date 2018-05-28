import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import {startSetExpenses} from "./actions/expenses";
import displayFilterExpenses from './selectors/expenses';
import {Provider} from 'react-redux';
import {firebase} from './firebase/firebase';
import LoginPage from './components/LoginPage'

const expStore = configureStore();



expStore.subscribe( () =>{
    const state = expStore.getState();
    const filteredExpenses = displayFilterExpenses(state.expenses,state.filters);
    //console.log(filteredExpenses);
});



/*
expStore.dispatch(addExpense({
        description:'Water Bill',
        note:"Jan bill",
        amount:4500,
        createdAt:1000
}));


expStore.dispatch(addExpense({
    description:"Gas Bill",
    note:"Jan Bill",
    amount:1000,
    createdAt: 22000

}));


expStore.dispatch(addExpense({
    description:"Rent",
    note:"March Rent was $10.00 than usual",
    amount:10950,
    createdAt: 2200

}));

*/

// expStore.dispatch(setTextFilter("water"));


const jsx = (
    <Provider store={expStore}>
        <AppRouter />
    </Provider>
);


    //----------------------------------
    // Let user know we are trying to
    // get data
    //----------------------------------
    ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));

    //----------------------------------
    // Get Data and if everything is ok
    // head to App Router to display app
    //----------------------------------
    expStore.dispatch(startSetExpenses()).then( ()=>{
        ReactDOM.render(jsx,document.getElementById('app'));
    });


    //-----------------------------------
    // Create Firebase Auth callback to
    // when a user logs in or logs out
    //-----------------------------------

    firebase.auth().onAuthStateChanged( (user)=>{

        if(user) {
            console.log( "Logged in");
        }else {
            console.log("User Logged out");
        }

    });




