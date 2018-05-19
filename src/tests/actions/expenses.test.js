import {addExpense,editExpense,removeExpense} from "../../actions/expenses";



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

   const action = addExpense(data);

   expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          ...data,
          id: expect.any(String)
        }
   })

});


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


});