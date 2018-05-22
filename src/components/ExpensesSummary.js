import React from 'react';
import {connect} from 'react-redux'
import selectExpenses from "../selectors/expenses";
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral'


export const ExpensesSummary =({expenseCount, expensesTotal}) => {

    const expenseWord = expenseCount ===1 ? 'expense' : 'expenses'
    const formattedAmount = numeral(expensesTotal / 100).format('$0,0.00');

    return(<div><h1>Viewing {expenseCount} {expenseWord} totaling {formattedAmount}</h1></div>);

};



//-------------------------------------------
// Get Expenses From State so we can get total
// and see how many expenses are being displayed
//--------------------------------------------
const mapStateToProps = (state) => {

    const visExpenses =  selectExpenses(state.expenses,state.filters);
    const expTotalInfo = expensesTotal(visExpenses);

    return {
        expenseCount: expTotalInfo.expNum,
        expensesTotal: expTotalInfo.total
    };
};


export default connect(mapStateToProps)(ExpensesSummary);