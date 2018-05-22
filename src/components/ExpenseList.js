import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'



//--------------------------------------
// This is our normal component and we pass
// in props. props will have access to our store
// because we pass it in to React Redux HOC and
// a new component is created.
//-----------------------------------------------

export const ExpenseList = (props) => (

    <div>
             {props.expenses.map( (expense) => <ExpenseListItem key={expense.id} expense={expense}/>)}
    </div>


);


//---------------------------------
// This calls React Redux HOC and a
// new Component is returned with the
// Redux Store Information we want to
// Manage in this component
//------------------------------------

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

export default connect(mapStateToProps)(ExpenseList);


//--------------------------------------------------------------------------
// We need to export the new Component that is created by React Redux HOC,
//--------------------------------------------------------------------------
// export default ConnectedExpenseList;



