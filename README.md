## Expenify App ##

### Application created using defaults of React Boiler Plate. I copied the ReadMe and put it on the bottom of this README

- install npd uuid for unique numbers until accessing database
- install Object spead operator plugin from babel, similar to array spread operator expect we have to install plugin
 + yarn add babel-plugin-transform-object-rest-spread
 + add to .babelrc 
 ```markdown

{
  "presets":["env","react"],
  "plugins": ["transform-class-properties","transform-object-rest-spread"]
}

```

- **Object spread Operator**, similar to array spread operator, but more useful

```markdown

//-------------------
// Test Object Spread Operator, which need babel plugin,
// more used than array spread operator
//-------------------

const user = {
    name: 'jen',
    age: 24
};


console.log({

...user

});


//------- Add new element to the array
console.log({

    ...user,
    location: "Stafford va"

});

//---- Override element value, it needs to
//---- come  after the spread, look at other example

console.log({

    ...user,
    location: "Stafford va",
    age: 40

});


//---- This example we add age before spread so spread object overright
//---- the age: 40 and it's back as ordinal
console.log({
    age: 40,
    ...user,
    location: "Stafford va"

});

```


**HIGHER ORDER COMPONENTS (HOC)**

- Higher Order Component (HOC) - A component (HOC) that renders another component
- HOC created to Reuse Code
- Render hijacking
- Prop manipulation
- Abstract state


**Example:**

```markdown

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
          <p>This is private info, please don't share</p>
          
          <WrappedComponent {...props} />
      </div>
    );

};

//----------------------------------------------
// We get back a higher order component (HOC)
//----------------------------------------------
const AdminInfo = withAdminWarning(Info);




ReactDOM.render(<AdminInfo info="This are the details" />,document.getElementById('app'));

```

- **Install Redux Chrome Extension** 
 + After install there is just a little change we have to make
 + View the [Github](https://github.com/zalmoxisus/redux-devtools-extension)
 
 ```markdown
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```

- **Install Jest** for unit testing
 + **yarn add jest**
 + Create a package.json script called **test** with the command **jest**
 ```markdown
  "scripts": {
    "serve-not-used": "live-server public/",
    "build-babel-not-used": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch",
    "build-not-used": " webpack --watch",
    "build": "webpack --mode development",
    "dev-server": "webpack-dev-server  --mode development",
    "test": "jest"
  },

```

<br/><br/><br/>

-------

## React Boiler Plate ##


### Use this for new React Projects ###


**Packages**

- **Yarn**
- **Babel Core, Cli, Loader, Preset-Env, Reset-React, Transform Class Properties**
- **Webpack Core, Cli, Dev-Server, css-loader**
- **Live Server -- but Webpack Dev-Server Preferred**
- **Node-Sass**
- **Normalize.css**
- **React Dom, Modal**
- **Validator**


**Scripts**

- **"serve-not-used":** "live-server public/",
- **"build-babel-not-used":** "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch",
- **"build-not-used":** "webpack --watch",
- **"build":** "webpack --mode development",
- **"dev-server":** "webpack-dev-server  --mode development"



**Using to create new project and put new project in Git**

- Download 
- Rename Directory name from **React-Boilerpage** to your project
- Remove **.git** directory inside project 
- Inside run **git init**
- After run **git remote add origin <name of git project"**  Example:  **git@gitlab.bop.gov:raymond-sandbox/code-examples/javascript-react/expensify-app.git**
- Then run 
 + **git add.**  
 + **git commint -m "My new project"**
 + **git push --set-upstream origin master**
- Project is now in git


**Run for the first time**

- Run **yarn install** - to install all Node dependencies
 + If you like **NPM** you can use that instead
- Change **name** varible in **package.json**
- Change **title* in **public/index.html**
- Run **yarn run dev-server** This will start the webpack dev server along with converting ES6 to ES6 and running SASS
- Goto localhost:8080 to see changes, anytime you add something webpack will run 



**Notes**

- The only script you need to run is the **yarn run dev-server** The others are there if you want.
yar






 



