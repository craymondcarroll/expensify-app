import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import {startSetExpenses} from "./actions/expenses";
import displayFilterExpenses from './selectors/expenses';
import {login,logout} from "./actions/auth";
import {Provider} from 'react-redux';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage'


const expStore = configureStore();



expStore.subscribe( () =>{
    const state = expStore.getState();
    const filteredExpenses = displayFilterExpenses(state.expenses,state.filters);
});

let hasRendered = false;
const renderApp = () => {

    if(!hasRendered) {
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRendered = true;
    }

};

/*
expStore.dispatch(addExpense({
        description:'Water Bill',
        note:"Jan bill",
        amount:4500,
        createdAt:1000
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
    ReactDOM.render(<LoadingPage />,document.getElementById('app'));



    //-----------------------------------
    // Create Firebase Auth callback to
    // when a user logs in or logs out
    //-----------------------------------

   firebase.auth().onAuthStateChanged( (user)=>{

        if(user) {

            expStore.dispatch(login(user.uid));
            //----------------------------------
            // Get Data and if everything is ok
            // head to App Router to display app
            //----------------------------------
            expStore.dispatch(startSetExpenses()).then( ()=>{

                renderApp();
                if (history.location.pathname === '/' ){
                    history.push("/dashboard");
                }

            });

        }else {
            expStore.dispatch(logout({}))
            renderApp();
            history.push('/');
        }

    });



