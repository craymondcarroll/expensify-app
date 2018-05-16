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
export const addExpense = (
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
