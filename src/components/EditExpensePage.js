import React from 'react';
import {connect} from 'react-redux'
import {startEditExpense,startRemoveExpense} from "../actions/expenses";
import ExpenseForm from './ExpenseForm';


const EditExpensePage = (props) => {

    return (

        <div>
            <h3>Edit Expense </h3>

            <ExpenseForm

                expense={props.expense}
                onSubmit={ (expense) => {
                  props.dispatch(startEditExpense(props.expense.id, expense));
                  props.history.push('/');
              }}
            />

            <button onClick={ (e) =>{

                props.dispatch(startRemoveExpense({id:props.expense.id}));
                props.history.push('/');

            }}>Remove</button>

       </div>

    );


}



//----------------------------------------------------------------
// The export here is a common pattern it
// We have access to the expenses and to the Expense ID passed in
// we will use the array find command to match the ID's and return
// the correct expense object
//
//----------------------------------------------------------------

const mapStateToProps = (state,props) => {
    return {
        expense: state.expenses.find( (expense) => {
            return expense.id === props.match.params.id;
        })
    };
};



export default connect(mapStateToProps)(EditExpensePage)
