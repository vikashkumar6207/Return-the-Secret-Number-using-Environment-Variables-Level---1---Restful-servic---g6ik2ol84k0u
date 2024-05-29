const express = require('express');
const app = express();
app.use(express.json());

// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
/*
{
    "number" : "2"
}
*/
app.get('/api/get-env', (req, res) => {
    const number = process.env.NUMBER;
   //Write your code here

   if(number){
    res.status(200).json({number});
   }else{
    res.status(404).json({err: "Not Found"});
   }

});

module.exports = app;
