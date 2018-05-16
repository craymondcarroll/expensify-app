import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

//-----------------------------------
// We will add component state to keep
// track of everything until they submit
// and it gets sent to redux
//--------------------------------------


export default class ExpenseForm extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
          description:      props.expense ? props.expense.description : '',
          note:             props.expense ? props.expense.note : '',
          amount:           props.expense ?  (props.expense.amount / 100).toString() : '',
          createdAt:        props.expense ? moment(props.expense.createdAt) : moment(),
          calendarFocused:  false,
          error:            undefined

      };


    }






    /*******************************************
     *
     * @param e
     *******************************************/
      onDescriptionChange = (e) => {
          const description = e.target.value;

            this.setState(() =>({
                description:description
            }));
      };


    /****************************************
     * Description: On Note Changed detected
     * @param e
     ****************************************/
    onNoteChange = (e) =>{
       const note = e.target.value;

       this.setState( () => ({
           note: note
       }));

    };


    /******************************************
     * Description: On Amount Changed detected
     *
     * @param e
     ******************************************/
    onAmountChange = (e) => {
      const amount = e.target.value;

      if (amount == '' || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
         this.setState( () =>({
            amount:amount
         })) ;
       }

    };


    /****************************************
     * Description: On Date Changed
     *
     * @param createdAt
     ****************************************/
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({
                createdAt: createdAt
            }));
        }
    };


    /****************************************
     * Description: On Calendar Focus Changed
     *
     * @param focused
     ****************************************/
    onFocusChange = ({focused}) => {

        this.setState( ()=>({

            calendarFocused:focused
        }));


    };


    /****************************************
     * Description: on Form Submit
     *
     * @param eevent
     ****************************************/
    onSubmit = (e) => {

        e.preventDefault();

        let hasError = undefined;

        if(!this.state.description || !this.state.amount) {
            this.setState( ()=>({error:'Please enter in Descripton and Amount'}));
        } else {
            this.setState( ()=>({error:undefined}));
            this.props.onSubmit({
                description:this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            })
        }

    };

    render() {

        return (
          <div>
            {this.state.error && <p > {this.state.error}</p>}
              <form onSubmit={this.onSubmit}>

                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />

                <input type="text"
                       placeholder="Amount"
                       value={this.state.amount}
                       onChange={this.onAmountChange}
                />

                <SingleDatePicker
                    date ={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange ={(day) =>false}


                />

                <textarea
                    placeholder="Add a note for expense"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>

                <button>Add Expense</button>

            </form>

          </div>

        );

    }



}