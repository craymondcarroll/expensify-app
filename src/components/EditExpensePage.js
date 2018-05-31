import React from 'react';
import {connect} from 'react-redux'
import {startEditExpense,startRemoveExpense} from "../actions/expenses";
import ExpenseForm from './ExpenseForm';


const EditExpensePage = (props) => {

    return (

        <div>
            <div className="page-header">
                <div className="content_container">
                    <h1 className="page-header__title">Edit Expense </h1>
                </div>
            </div>

            <div className="content_container">
            <ExpenseForm
                expense={props.expense}
                onSubmit={ (expense) => {
                  props.dispatch(startEditExpense(props.expense.id, expense));
                  props.history.push('/');
              }}
            />


            <button className="button button__secondary" onClick={ (e) =>{

                props.dispatch(startRemoveExpense({id:props.expense.id}));
                props.history.push('/');

            }}>Remove Expense</button>

       </div>

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
