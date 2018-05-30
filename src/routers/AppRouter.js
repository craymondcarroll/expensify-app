import React from 'react';
import {
    Router,
    Route,
    Switch,
    Link,
    NavLink
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute  from './PrivateRoute';


//------------------------------------------------------
// We are creating are own history
// object, because we have other
// files that are not components that
// we want to use it with. It we
// just had components we could
// use <BrowserRouter> and history is built in
// we are not going to is <Router> which allow us
// to support our own history object
//-----------------------------------------------------
export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>


            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route  component={NotFoundPage}/>
            </Switch>

        </div>
    </Router>


);


export default AppRouter;

