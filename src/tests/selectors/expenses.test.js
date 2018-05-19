import selectExpenses from '../../selectors/expenses'
import moment from 'moment'



//---- Create some test expense data
const expenses = [
    {
        id:1,
        description:'rent',
        amount: 109500,
        note:"January's rent",
        createdAt:moment(0).valueOf()
    },
    {
        id:2,
        description:'utilities',
        amount: 11015,
        note:"",
        createdAt:moment(0).add(4,"days").valueOf()
    },
    {
        id:3,
        description:'takeout pizza',
        amount: 4045,
        note:"Pappa Johns",
        createdAt:moment(0).subtract(4,"days").valueOf()
    }
];


test("Test Text Filter ", ()=>{

    const filter = {
        text: 'n',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses,filter);
    expect(result).toEqual([expenses[0]]);

});


test("Test Start Date Filter", () => {

    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses,filter);
    expect(result).toEqual([expenses[1],expenses[0]]);


});

test("Test End State Filter", () =>{

    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const result = selectExpenses(expenses,filter);

    expect(result).toEqual([expenses[0],expenses[2]]);


});


test("Test Sort By Date", () =>{

    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses,filter);

    expect(result).toEqual([expenses[1],expenses[0],expenses[2]]);


})


test("Test Sort By Amount", () =>{

    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses,filter);

    expect(result).toEqual([expenses[0],expenses[1],expenses[2]]);


})