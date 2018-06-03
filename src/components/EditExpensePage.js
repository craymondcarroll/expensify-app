import React from 'react';
import {connect} from 'react-redux'

import {startEditExpense,startRemoveExpense} from "../actions/expenses";
import ExpenseForm from './ExpenseForm';
import AreYouSureModal from './AreYouSureModal';
import Modal from "react-modal";



class EditExpensePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expense: props.expense,
            isModalOpened: false,
            modalMessage: ""
        }

    }


    handleCloseModal = ()=> {

        this.setState ( ()=>({isModalOpened:false}));
        console.log("Request to close");

    }


    render() {
        return (




            <div>
                <div className="page-header">
                    <div className="content_container">
                        <h1 className="page-header__title">Edit Expense </h1>
                    </div>
                </div>

                <div className="content_container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={(expense) => {

                            this.props.dispatch(startEditExpense(this.state.expense.id, expense));
                            this.props.history.push('/');
                        }}
                    />


                    <button className="button button_danger" onClick={(e) => {

                        const results = false;


                        this.setState( ()=>({
                            isModalOpened:true,
                            modalMessage:`Delete Expense ${this.props.expense.description}?`

                        }));



                        if (results) {
                            this.props.dispatch(startRemoveExpense({id: props.expense.id}));
                            this.props.history.push('/');
                        }


                    }}>Remove Expense
                    </button>

                </div>

                <AreYouSureModal
                    isOpen ={this.state.isModalOpened}
                    handleCloseModal = {this.handleCloseModal}
                    modalMessage = {this.state.modalMessage}



                />

            </div>




        );

    }


    componentDidMount() {

        /*
        Warning: react-modal: App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`.
        This is needed so screen readers don't see main content when modal is opened. It is not recommended, but you can opt-out by setting `ariaHideApp={false}`.
        We have to add below or we will get above error message with react modal appears
        */

        Modal.setAppElement('body');


    }


};



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
