/*******************************************
 * Set Text Filter Action. If text has no value
 * it will default to empty string.
 *
 *
 * @param text
 * @returns {{type: string, text: *}}
 *
 *******************************************/
export const setTextFilter = (text = "") => ({

    type: 'SET_TEXT_FILTER',
    text

});


/******************************
 * Sort by Amount
 *
 * @returns {{type: string}}
 ******************************/
export const sortByAmount = () => ({

    type: 'SORT_BY_AMOUNT'

});


/****************************
 * Sort By Date
 * @returns {{type: string}}
 ****************************/
export const sortByDate = () => ({

    type: 'SORT_BY_DATE'

});


/*************************************
 * Set filter by start date
 * @param startDate
 * @returns {{type: string, startDate: undefined}}
 *************************************/

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})


/**********************************
 * sets filter by end date
 * @param endDate
 * @returns {{type: string, endDate: undefined}}
 **********************************/
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

