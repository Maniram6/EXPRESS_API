// Importing Modules =========================================================================================================

//Express importing for main application
const express = require('express');
const app = express();

// FileSystem module for read and write local files
const fs = require('fs');

// body-parser dependencies for reading/writing different format files
const bodyparser = require('body-parser');

// Database connect module iporting
const conn = require('./DB_CONNECT.js')


// Listening Ports =============================================================================================================
const port = 4545;


// Importing Static Files ======================================================================================================

app.use(express.static('./Public'));


app.use(bodyparser.json());





// Database connection

// app.use(con)
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });







// Lambda 
// exports.handler = async (event) => {
//     console.log(event);
//     return 'Hello from Lambda!';
//   };

// (exports.handler)();



// Starting URL Route =========================================================================================================

app.get('/', (req,res)=>{
    // res.status(200).send(`HOME PAGE`)
    fs.createReadStream('./Public/HomePage.html').pipe(res)
})

// Importing routes modules ======================================================================================================

const aboutroute = require('./Routes/aboutRoutes.js');
app.use('/about', aboutroute);

const publicroute = require('./Routes/publicRoutes.js');
app.use('/public', publicroute);


// For Wrong URL's =============================================================================================================
app.use('*',(req,res) => {
    res.status(404).send(`<h1>Wrong URL Found! 404</h1>`);
})



// Server listening ports =======================================================================================================
app.listen(port, () => {
    console.log(`Server is listening on port : ${port}....`);  
})



