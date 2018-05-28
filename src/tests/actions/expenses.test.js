import {addExpense,editExpense,removeExpense, startAddExpense} from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import ConfigureMockStore from 'redux-mock-store';
import configureStore from "../../store/configureStore";
import thunk from 'redux-thunk';


const createMockStore = configureStore([thunk]);

console.log(createMockStore);

test("Remove Expense Action Generator", ()=>{

    const action = removeExpense({id:'123'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });

});



test("Edit Expense Action Generator", () =>{

    const action = editExpense("123",{note:"my note"});

     expect(action).toEqual({

        type: 'EDIT_EXPENSE',
        id: '123',

         updates: {
          note:'my note'
        }

     });

});



test('Add Expense Action Generator', ()=>{

   const data = {
       description:'this is a test',
       note: 'this is a note',
       amount: 45000,
       createdAt: 1000
   };

   const action = addExpense(expenses[2]);

   expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
   })

});


/*
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});


/*
test('should add expense with defaults to database and store', () => {

    const expenseData = {

        description: 'mouse',
        amount: 3000,
        note: 'This is a mouse',
        createdAt: 10000
    };

    const store = createMockStore({});
    store.dispatch(startAddExpense(expenseData));

});

*/
/*
test('Add Expense Action, Default Values, ', () => {

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            createdAt: 0,
            description: "",
            note: "",
            amount:0,
            id: expect.any(String)

        }


    });


});*/
