
export default (expenses) => {


     let total = 0;

     expenses.forEach( (expense)=> {

      total += expense.amount;

     });

     console.log(total);
    return(total);

}