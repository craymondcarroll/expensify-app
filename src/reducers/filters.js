import moment from 'moment';



//------------------------------
// filter Reducer Default State
//------------------------------

const FilterDefaultState  = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
};


/************************************
 * Filter Reducer, takes state that will
 * default to
 *
 * @param state
 * @param action
 * @returns {{text: string, sortBy: string, startDate: undefined, endDate: undefined}}
 ************************************/

export default  (state = FilterDefaultState, action) => {

    switch(action.type) {


        case 'SET_TEXT_FILTER' :
            return {
                ...state,
                text: action.text
            }

        case 'SORT_BY_DATE' :
            return {
                ...state,
                sortBy: 'date'

            };

        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy: 'amount'

            };


        case 'SET_START_DATE' :
            return {
                ...state,
                startDate: action.startDate
            };

        case 'SET_END_DATE' :
            return {
                ...state,
                endDate: action.endDate
            };


        default:
            return state;
    }

};


