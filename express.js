const express= require('express');
const path=require('path');
const port=4000;
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    return res.render('home');
});

app.listen(port,function(err){
    if (err){
        console.log("hey its an error!");
    }
    console.log('Server has been created at: ', port);
});
