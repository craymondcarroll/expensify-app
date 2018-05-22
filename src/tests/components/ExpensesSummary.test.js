import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme'

test("Should correctly render ExpensesSummary with 1", () => {

    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={(11500)} />);
    expect(wrapper).toMatchSnapshot();


});


test("Should correctly render ExpensesSummary with muliple", () => {

    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={(115400)} />);
    expect(wrapper).toMatchSnapshot();



});