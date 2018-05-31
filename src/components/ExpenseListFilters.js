import React from 'react';
import {connect} from 'react-redux'
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from "../actions/filters";
import {DateRangePicker} from 'react-dates';

class ExpenseListFilters extends React.Component {

 constructor( props) {
     super(props);

     this.state = {
        calendarFocused: null
     }
 }


    onDatesChange = ({startDate,endDate}) => {
         this.props.dispatch(setStartDate(startDate));
         this.props.dispatch(setEndDate(endDate));

         
    };

    onFocusChange = (calendarFocused) => {

     this.setState( ()=> ({
        calendarFocused:calendarFocused
     }));

   };


    render() {

        return (

            <div className="content_container">

                <div className="input-group">

                    <div className="input-group__item">
                        <input
                            type="text"
                            placeholder="Search Expenses"
                            className="text-input"
                            value={this.props.filters.text}
                            onChange={e => {

                                this.props.dispatch(setTextFilter(e.target.value));
                        }} />
                    </div>

                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={e => {
                                switch (e.target.value) {
                                    case "date":
                                        this.props.dispatch(sortByDate());

                                        break;
                                    case "amount":
                                        this.props.dispatch(sortByAmount());
                                        break;

                                    default:
                                        this.props.dispatch(sortByDate());
                                }
                        }}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>

                    <div className="input-group__item">
                        <DateRangePicker startDate={this.props.filters.startDate} startDateId="FilterStartDate" endDate={this.props.filters.endDate} endDateId="FilterEndDate" onDatesChange={this.onDatesChange} focusedInput={this.state.calendarFocused} onFocusChange={this.onFocusChange} numberOfMonths={1} isOutsideRange={() => false} showClearDates={true} />
                    </div>

                </div>

          </div>

        );
    }

};



/***********************************************
 * Connect state to props for component.
 *
 * @param state
 * @returns {{filters: filtersReducer|demoState.filters|{text, sortBy, startDate, endDate}|Function|*}}
 ***********************************************/
const mapStateToProps = (state) => {
    return {
       filters: state.filters
    };
};


export default connect(mapStateToProps)(ExpenseListFilters);
