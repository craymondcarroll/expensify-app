import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import {startSetExpenses} from "./actions/expenses";
import displayFilterExpenses from './selectors/expenses';
import {Provider} from 'react-redux';
import './firebase/firebase';


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


    ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));

        expStore.dispatch(startSetExpenses()).then( ()=>{

         ReactDOM.render(jsx,document.getElementById('app'));

        });






