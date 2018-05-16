import {createStore} from 'redux';


//Action generators  are functions that returns action objects;


/************************************************
 *
 * @param incrementBy
 * @returns {{type: string, incrementBy: number}}
 *************************************************/
const incrementCount = ({incrementBy = 1} = {}) => ({

            type: 'INCREMENT',
            incrementBy
            //  above is same as incrementBy: incrementBy

    });


/************************************************
 *
 * @param decrementBy
 * @returns {{type: string, decrementBy: number}}
 *************************************************/
const decrementCount = ({decrementBy = 1} = {}) => (

    {
     type:'DECREMENT',
     decrementBy
    }

);

/**************************************************
 *
 * @param count
 * @returns {{type: string, count: number}}
 ****************************************************/
const setCount = ({count = 20} = {}) => ({

    type:'SET',
    count

});


const resetCount = ({count = 0} = {}) => ({

    type:'RESET',
    count

});


// Key attributes of a Reducer
//1. Reducers are pure functions
//2. Never change directly state or action


//

/******************************************
 *
 * @param state
 * @param action
 * @returns {*}
 *******************************************/
const countReducer = (state ={count: 0}, action) => {

    switch(action.type) {


        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };


        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };



        case 'SET':
            return {
                count: action.count
            };


        case 'RESET':
            return {
                count: action.count
            };

        default:
            return state;

    }


};




const store = createStore(countReducer);

const unsubscribe = store.subscribe( ()=> {
    console.log(store.getState());
});




//Actions - take an object that gets sent to the store

// I'd like to increment the count
store.dispatch({

    type: 'SET',
    count: 11
});


store.dispatch({

    type: 'DECREMENT',
    decrementBy:2
});


store.dispatch(incrementCount({incrementBy:2}));
store.dispatch(incrementCount());


store.dispatch(decrementCount({decrementBy:4}));
store.dispatch(decrementCount());


store.dispatch(setCount({count:101}));
store.dispatch(setCount());


store.dispatch(resetCount({count:2}));
store.dispatch(resetCount());
