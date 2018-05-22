import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expenses-total';



test("Test expenses Total and number of expenses", ()=>{

    const results = expensesTotal(expenses);
    expect(results.total).toEqual( (expenses[0].amount + expenses[1].amount + expenses[2].amount));
    expect(results.expNum).toEqual(3);

})




test("Test just one expense Total and number of expenses", ()=>{

    const modExpenses = [expenses[1]];

    const results = expensesTotal(modExpenses);
    expect(results.total).toEqual( expenses[1].amount);
    expect(results.expNum).toEqual(1);

})



test("Test empty Array expenses Total and number of expenses", ()=>{

    const modExpenses = [];

    const results = expensesTotal(modExpenses);
    expect(results.total).toEqual(0);
    expect(results.expNum).toEqual(0);
    console.log(results);

})