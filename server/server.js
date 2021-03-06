const express = require('express');
const path = require('path');


//-----------------------------
// We are planning to run this on
// Heroku and we get a dynamic port
// from the server in a form of a
// environment variable.
//------------------------------
const port = process.env.PORT || 3000;


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
app.listen(port, () =>{
   console.log("Server is up and running");
   console.log("Document root is ", publicPath);
});

