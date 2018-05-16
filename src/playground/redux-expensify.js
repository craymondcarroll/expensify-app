import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';



/**************************************
 * Add Expense Action
 *
 * @param description
 * @param note
 * @param amount
 * @param createAt
 * @returns {{type: string, expense: {id: *, description: string, note: string, amount: number, createAt: number}}}
 **************************************/
const addExpense = (
     {
         description = '',
         note = '',
         amount = 0,
         createdAt = 0

     } = {}) => ({

    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }

});


/**********************************************
 * Remove Expense Action
 *
 * @param expense
 * @returns {{type: string, id: *}}
 **********************************************/
const removeExpense = (expense) => ({

    type: 'REMOVE_EXPENSE',
    id: expense.id

});

//--- or using deconstruction


/**********************************************
 * Remove Expense Action using deconstruction
 *
 * @param id
 * @returns {{type: string, id: *}}
 ********************************************/
const removeExpenseDeconst = ({id}) => ({

    type: 'REMOVE_EXPENSE',
    id

});


/**********************************************
 * Edit Expense, we pass in the ID and the Update
 * array. Both the id and updates don't need default
 * values because they are both needed
 *
 * @param id - Id of expense report
 * @param updates Updates {amount, note, description, etc}
 *
 * @returns {{type: string, id: *, updates: *}}
 **********************************************/
const editExpenseAction = (id,updates) => ({

    type: 'EDIT_EXPENSE',
    id,
    updates

});


/*******************************************
 * Set Text Filter Action. If text has no value
 * it will default to empty string.
 *
 *
 * @param text
 * @returns {{type: string, text: *}}
 *
 *******************************************/
const setTextFilterAction = (text = "") => ({

    type: 'SET_TEXT_FILTER',
    text

});


/******************************
 * Sort by Amount
 *
 * @returns {{type: string}}
 ******************************/
const sortByAmount = () => ({

    type: 'SORT_BY_AMOUNT'

});


/****************************
 * Sort By Date
 * @returns {{type: string}}
 ****************************/
const sortByDate = () => ({

    type: 'SORT_BY_DATE'

});


/*************************************
 * Set filter by start date
 * @param startDate
 * @returns {{type: string, startDate: undefined}}
 *************************************/

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})


/**********************************
 * sets filter by end date
 * @param endDate
 * @returns {{type: string, endDate: undefined}}
 **********************************/
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})


//------------------------------
// Expenses Reducer, never change
// the state directly
//------------------------------

const expensesReducerDefaultState = [];

/*************************************
 * Expense Reducer, takes State which
 * will default to empty array
 *
 *
 * @param state
 * @param action
 * @returns {*}
 *************************************/

const expensesReducer = (state = expensesReducerDefaultState,action) => {

  switch(action.type) {

      case 'ADD_EXPENSE':

          // -- we can concat the object
          // return state.concat(action.expense);

          // Better yet, we can use the spread operator
          return [...state, action.expense];


      case 'REMOVE_EXPENSE':

        return state.filter( ({id}) =>{
            return id !== action.id
        });


      case 'EDIT_EXPENSE':

          return state.map(  (expense) => {

              if(action.id === expense.id) {

                  console.log(action);
                  return {...expense,
                          ...action.updates
                  };

              } else {
                  return expense;
              }

          });



      default:
          return state;
  }

};



//------------------------------
// filter Reducer Default State
//------------------------------

const FilterDefaultState  = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
     };


/************************************
 * Filter Reducer, takes state that will
 * default to
 *
 * @param state
 * @param action
 * @returns {{text: string, sortBy: string, startDate: undefined, endDate: undefined}}
 ************************************/

const filtersReducer = (state = FilterDefaultState, action) => {

    switch(action.type) {


        case 'SET_TEXT_FILTER' :
          return {
              ...state,
              text: action.text
          }

        case 'SORT_BY_DATE' :
            return {
                ...state,
                sortBy: 'date'

            };

        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy: 'amount'

            };


        case 'SET_START_DATE' :
            return {
                ...state,
                startDate: action.startDate
            };

        case 'SET_END_DATE' :
            return {
                ...state,
                endDate: action.endDate
            };


        default:
            return state;
    }

};


/*****************************************
 * Filter Expenses
 *
 *
 * @param expenses
 *
 * --- Destructuring -- Filter with below parameters
 * @param text
 * @param sortby
 * @param startDate
 * @param endDate
 * @returns {*}
 *******************************************/
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {

    console.log(text);

    return expenses.filter( (expense) =>{

        //---- The Idea is if all three *Match filter will return the expense. We will check
        //---- each to see


        //--- If startDateMatch is not a number it's true, (user didnot put anything)
        //-- Than check and see if startDateMatch is Create than created date, is so its true
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;

        //--- EndDateMatch is the same logic as startDateMatch above.
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;


        //--- Test if text is a string than see if the text search passed in is a substring of the description field.
        const textMatch =  typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());



        return startDateMatch && endDateMatch && textMatch;

    }).sort( (a,b) =>{

        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1

        }

        if(sortBy === 'amount') {

            return a.amount < b.amount ? 1 : -1;
        }


    });

};



//------------------------------
// Store Creation combining multiple
// reducers to help break up large
// state tracking
//------------------------------
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer

    })

);


//-----------------------------------
// Subscribe to store changing state
//-----------------------------------
store.subscribe( () =>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

    console.log(store.getState());
   console.log(visibleExpenses);
});





 //------------------------------
 // State Object,
 // This is what we want Redux to
 // track
 //------------------------------
const demoState = {

    expenses: [{
        id: 'random',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }

};


//---------------------
//
//   Testing
//
//----------------------


//-------------------
// Test Object Spread Operator, which need babel plugin,
// more used than array spread operator
//-------------------

/*
const user = {
    name: 'jen',
    age: 24
};


console.log({

    ...user

});


//------- Add new element to the array
console.log({

    ...user,
    location: "Stafford va"

});

//---- Override element value, it needs to
//---- come  after the spread, look at other example

console.log({

    ...user,
    location: "Stafford va",
    age: 40

});


//---- This example we add age before spread so spread object overright
//---- the age: 40 and it's back as ordinal
console.log({
    age: 40,
    ...user,
    location: "Stafford va"

});




const expenseOne = store.dispatch(addExpense({description: 'Rent', amount:700} ));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount:100} ));

console.log(expenseOne);
store.dispatch(removeExpense({id: expenseOne.expense.id}));


//---------------------
// Look at object with element ammount, this can be any of the
// element(s) in the expense, we plan to use object spread operator
// to handle this
//----------------------
store.dispatch(editExpenseAction(expenseTwo.expense.id, {amount:500}));



store.dispatch(setTextFilterAction('rent'));
store.dispatch(setTextFilterAction());


store.dispatch(sortByAmount());
store.dispatch(sortByDate());


store.dispatch(setStartDate(125));
store.dispatch(setStartDate());


store.dispatch(setEndDate(525));
store.dispatch(setEndDate());
*/



const expenseOne = store.dispatch(addExpense({description: 'Rent', amount:700, createdAt:-21000} ));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount:100,createdAt:-1000} ));
//store.dispatch(setStartDate(125));
// store.dispatch(setTextFilterAction("e"));
//store.dispatch(sortByDate());
store.dispatch(sortByAmount());
