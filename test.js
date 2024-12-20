const express =require('express');

const PORT=8080;
const HOST='0.0.0.0';
 
const app =express();

app.get('/',(req,res)=>{
res.send("Hello eng-Nade This is a test for first page")

});

app.get('/hello',(req,res)=>{

    res.send("Hallo-World!")

});

app.get('/users',(req,res)=>{

    res.send("Are you sure you want list your users")

});
app.listen(PORT,HOST,() =>{

console.log('Application started successfully...!');

});



