import {setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount} from "../../actions/filters";
import moment from 'moment';



test("startDate Action Test", ()=>{

   const action = setStartDate(moment(0));

   expect(action).toEqual({

      type:'SET_START_DATE',
      startDate:moment(0)
   });

});



test("endDate Action Test", ()=>{

    const action = setEndDate(moment(0));

    expect(action).toEqual({

        type:'SET_END_DATE',
        endDate:moment(0)
    });



});




test("Test Text Filter with supplied value", () =>{

    const action = setTextFilter("Hello");

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Hello'
    });

});



test("Test Text Filter with default value", () =>{

    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });

});


test("Test Sort By Amount ", () =>{

   const action = sortByAmount();

   expect(action).toEqual({
       type: 'SORT_BY_AMOUNT',
   });

});


test("Test Sort By Date ", () =>{

    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });

});