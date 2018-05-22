/***********************************************
 * @param expenses
 * @returns {{expNum: *, total: number}}
 ***********************************************/
export default (expenses) => {


    let expensesTotal =
        {
          expNum: expenses.length,
          total:  0
        }

     expenses.forEach( (expense)=> expensesTotal.total += expense.amount);
     return(expensesTotal);


     //------------------------------
     // We could do the following
     //-------------------------------

    /*
      return expenses
          .map((expense) => expense.amount)
          .reduce((sun,value) => sum + value, 0);

*/
}