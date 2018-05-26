import uuid from 'uuid';
import database from '../firebase/firebase';


//---- Before adding Firebase
//-------------------------------
// Component call action generator
// Action generator returns object
// component dispatches object
// redux store changes


//----- Add adding firebase
//-------------------------------
// Component calls action generator
// action generator returns function
// component dispatches function
// function runs ( has the ability to dispatch other actions and do what it wants)


/******************************************
 *
 * @param expense
 * @returns {{type: string, expense: *}}
 *
 ******************************************/
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});


/********************************************
 * This is a function just like all other except
 * instead of returning an object it will return
 * a function, by default Redux would not allow this
 * it is only becuase we install the middleware
 * Thunk.
 *
 *
 *
 * This method will dispatch AddExpense
 * above but the function will call Firebase
 * beforehand
 *
 *
 *******************************************/
export const startAddExpense = (expenseData = {}) => {

    // this function get called internally by Redux
    // passing in dispatch
    return (dispatch) =>{

        const  {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = {description,note,amount,createdAt};

        database.ref('expenses').push(expense)
            .then( (ref)=>{
                dispatch(addExpense({
                    id:ref.key,
                    ...expense
                }));

            }).catch( (e)=>{

        });

    };


}





/**********************************************
 * Remove Expense Action
 *
 * @param expense
 * @returns {{type: string, id: *}}
 **********************************************/
export const removeExpense = (expense) => ({

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
export const removeExpenseDeconst = ({id}) => ({

    type: 'REMOVE_EXPENSE',
    id

});


export const startRemoveExpense = ({id}) =>  {


    return (dispatch) => {

        database.ref(`expenses/${id}`).remove()
            .then( ()=>{

              dispatch(removeExpenseDeconst({id}));


            }).catch( (e)=>{
             alert("Error: "+e);
        });

    };

};



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
export const editExpense = (id,updates) => ({

    type: 'EDIT_EXPENSE',
    id,
    updates

});

export const startEditExpense=(id,expense) => {

    return (dispatch) => {
        database.ref(`expenses/${id}`).update({...expense})
            .then( ()=>{
                dispatch(editExpense(id,expense));

            }).catch((e)=>{

                alert("Error: "+e);
        });

    };

};


/*********************************
 * Set Expenses Action will place
 * passed in expenses into redux store,
 * This will not get called by
 * startSetExpenses
 *
 *
 *********************************/
 export const setExpenses = (expenses)=> ({

    type: 'SET_EXPENSES',
    expenses

});


/****************************************
 * startSetExpenses will get expenses from
 * database and call SetExpenses Redux action
 *
 * Redux will will put the dispatch in the
 * return method.
 *
 *
 *@returns {function(*): *}
 ****************************************/

export const startSetExpenses = () => {

    const expenses =[];

    return (dispatch) => {

      return database.ref("expenses").once("value").then( (snapshot) => {

         snapshot.forEach ( (childSnapshot) =>{

            expenses.push( {
                id: childSnapshot.key,
                ...childSnapshot.val()
                });
         });

         dispatch(setExpenses(expenses));
      })

    };

};





