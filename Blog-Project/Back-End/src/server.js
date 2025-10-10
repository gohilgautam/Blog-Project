require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 8000;
const app = express();

app.listen(PORT,(err) => {
    if(err){
        console.log("Your Server Is Crashed : " `${err}`);
        return false;
    }
    console.log(`Yahoo Server is Started😎😎.... http://localhost:${PORT}`)
})