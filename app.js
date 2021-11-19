const express = require('express');

const app=express();

app.use('/users',(req,res,next)=>{
    res.send("<h1>This is the Users page</h1>");
    console.log("/users")
})
app.use('/',(req,res,next)=>{
    console.log("/")
    res.send("<h1>Welcome to my express app!</h1>");
})

app.listen(3000);