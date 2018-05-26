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

export default (state = expensesReducerDefaultState,action) => {

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

                    return {...expense,
                        ...action.updates
                    };

                } else {
                    return expense;
                }

            });


        case 'SET_EXPENSES':
            return action.expenses;


        default:
            return state;
    }

};

