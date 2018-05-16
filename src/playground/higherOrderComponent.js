// Higher Order Component (HOC) - A component (HOC) that renders another component
//HOC created to Reuse Code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';


//---------------------------------------
// Standard React Component, not HOC
//---------------------------------------

const Info = (props) => (

   <div>
       <h1>Info</h1>
       <p>The info is {props.info}</p>
   </div>


);


//-----------------------------------------
// Standard function, not react component
// Since we pass in a Component we need to
// follow Uppercase first Letter
//-----------------------------------------


const withAdminWarning = (WrappedComponent) => {

    //--- This is where we are returning HOC
    //--- We also need to pass in any props to
    //--- acomplish this we will use the object spread operator
    return (props) => (
      <div>
          {props.isAdmin &&  <p>This is private info, please don't share</p>}
          <WrappedComponent  {...props} />
      </div>
    );

};


const requireAuthentication = (WrappedComponent) => {

    return (props) => (

        <div>
          {props.isAuthenticated ?  <WrappedComponent  {...props} /> : <p>Need to Authenticate</p>}
         </div>


    );

};



//----------------------------------------------
// We get back a higher order component (HOC)
//----------------------------------------------
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);



//ReactDOM.render(<AdminInfo isAdmin={true} info="This are the details" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This are the details" />,document.getElementById('app'));
