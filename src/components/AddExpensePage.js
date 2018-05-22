import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import selectExpenses from "../selectors/expenses";
import {addExpense} from "../actions/expenses";


const AddExpensePage = (props) => (

    <div>
      <h1>Add Expense</h1>
        <ExpenseForm

            onSubmit={ (expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>

);


//----------------------------------------------------------------
// The export here is a common pattern it
// is the same as
// const ConnectedExpenseList = connect((state)=>{
// Which than at bottom you export default ConnectedExpenseList
//----------------------------------------------------------------

const mapStateToProps = (state) => {
    return {
        expenses:   selectExpenses(state.expenses,state.filters)
    };
};





export default connect(mapStateToProps)(AddExpensePage);