const express = require('express');

//invoking our express function
const app = express();

// set up view engine 
app.set('view engine', 'ejs');

app.listen(3000, () =>{
    console.log('app now listening for requests on port 3000');
});