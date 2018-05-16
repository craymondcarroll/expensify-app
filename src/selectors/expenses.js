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


        //--- If startDateMatch is not a number it's true, (user didnot put anything)
        //-- Than check and see if startDateMatch is Create than created date, is so its true
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;

        //--- EndDateMatch is the same logic as startDateMatch above.
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;


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

