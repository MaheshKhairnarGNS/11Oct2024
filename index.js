//console.log("Working...")

const express = require('express');

const app = express();

require('dotenv').config();

app.get('/about/:emp1', (req, res)=>{
    console.log(req.params.emp1);

    const emp1 = req.params.emp1;

    console.log("Value of emp1: ", emp1);
       
    
    res.json({Name:emp1});
});


//console.log(process.env);

let PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log(`The server is running on port: ${PORT}`)
});