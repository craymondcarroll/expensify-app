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

    <div className="content_container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
           <div className="list-body">
             {

                 props.expenses.length === 0 ? (
                     <div className="list-item list-item__message"><span>No expenses</span></div>
                 ) :(
                     props.expenses.map( (expense) => <ExpenseListItem key={expense.id} expense={expense}/>)
                 )
             }

           </div>
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



