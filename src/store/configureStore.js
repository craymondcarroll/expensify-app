import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';  // -- This allows us to dispatch functions which is how we going to update firebase




const componseEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//------------------------------
// Store Creation combining multiple
// reducers to help break up large
// state tracking
//------------------------------

export default () => {

    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer

        }),
         componseEnhancers(applyMiddleware(thunk))


    );

    return store;

};


/**
 *
 *
 * This was are store before we added thunk, Above was needed since we add redux dev tool
 *
//------------------------------
// Store Creation combining multiple
// reducers to help break up large
// state tracking
//------------------------------

export default () => {

    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer

        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


    );

    return store;

};
*/