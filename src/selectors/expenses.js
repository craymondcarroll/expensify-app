import moment from 'moment';


/*****************************************
 * Filter Expenses
 *
 *
 * @param expenses
 *
 * --- Destructuring -- Filter with below parameters
 * @param text
 * @param sortby
 * @param startDate
 * @param endDate
 * @returns {*}
 *******************************************/
export default  (expenses,{text,sortBy,startDate,endDate}) => {



    return expenses.filter( (expense) =>{

        //---- The Idea is if all three *Match filter will return the expense. We will check
        //---- each to see


        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,"day") : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,"day") : true;


        //--- Test if text is a string than see if the text search passed in is a substring of the description field.
        const textMatch =  typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());



        return startDateMatch && endDateMatch && textMatch;

    }).sort( (a,b) =>{

        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1

        }

        if(sortBy === 'amount') {

            return a.amount < b.amount ? 1 : -1;
        }


    });

};

