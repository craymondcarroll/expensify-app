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

- Modified Webpack to export configuration as a function [Webpack Configuration Types] (https://webpack.js.org/configuration/configuration-types/) this allows for determining if we are using development or production 
```markdown

    "build:dev": "webpack --mode development --env development",
    "build:prod": "webpack --mode production --env production",
```

- We can tell webpack to break out CSS into its own files using the [Text Extract Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
 + **yarn add extract-text-webpack-plugin**
 
- We now want to install **express**
 + **yarn add express** 

- create a server/seseserver.js with 

```markdown
const express = require('express');
const path = require('path');

//------------------------------
// Create path to application
// -----------------------------
const publicPath = path.join(__dirname,'..','public');

//-----------------------
// Create Express object
//-----------------------
const app = express();

//------------------------------------------
// Tell express to use this path for docroot
//-------------------------------------------
 app.use( express.static(publicPath) );


//--------------------------------
// React is using a software router
// and we need to tell express to
// intercept and files/paths not found
// and send to index.html and let React
// handle it
//---------------------------------------
 app.get('*',(req, res) =>{
  res.sendFile(path.join(publicPath, 'index.html'));
 });


//---------------------
// Listen on port
//---------------------
app.listen(3000, () =>{
   console.log("Server is up and running");
   console.log("Document root is ", publicPath);
});


```

- Install heroku cli, just google heroku cli.
 + to test just type in **heroku --version**
 + login from the terminal **heroku login**
- Once authenticated we can create an app
 + **heroku create <name of app>** 
 + **heroku create my-expenses-app** This will also create a new git remote called **heroku**
 + run git remote you will see 

 ```markdown
~/git/react/expensify-app$ git remote
heroku
origin
raymond@
```
- We will use git remote to deploy to Heroku 
- To run our app in Heroku we have to make some changes like telling Heroku how to start up the app
- **Heroku will look in the package.json looking for a **start** script we have to create
```markdown

start: "node server/server.js" 
```
- We also need to create a couple of scripts that Heroku will look for in the package.json file 
 + heroku-postbuild - this is where we will get heroku to run webpack
 + heroku-prebuild - we will not take advantage of this
 
```markdown

  "scripts": {
    "serve-not-used": "live-server public/",
    "build-babel-not-used": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch",
    "build-not-used": " webpack --watch",
    "build:dev": "webpack --mode development --env development",
    "build:prod": "webpack --mode production --env production",
    "dev-server": "webpack-dev-server  --mode development",
    "start": "node server/server.js",
    "heroku-postbuild": "yarn run build:prod",
    "test": "jest"
  },

```
- we also want to add a couple of files to the .gitignore file
 + public/bundle.js
 + public/bundle.js.map
 + public/styles.css
 + public.style.css.map
 
- Now we have to push git to Heroku
  + git push heroku master

- we will now get a url 
 +  https://my-expenses-app.herokuapp.com/ 
 + this is our app url on heruko  
 + we can look at logs **heruko logs** this is useful for debugging
  
  
  


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
- After run **git remote add origin <name of git project"**  
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






 



