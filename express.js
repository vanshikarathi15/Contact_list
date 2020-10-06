const express= require('express');
const path=require('path');
const port=4000;
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
//middleware
app.use(express.static('assets'));
// app.use(function(req,res,next){
//     console.log('middleware called')
//     next();
// })

// var contactList=[
//     {
//         name:"Vanshika",
//         phone:"9999999999"
//     },
//     {
//         name:"Bhavya",
//         phone:"9898989898"
//     },
//     {
//         name:"Mentor",
//         phone:"123456789"
//     }
// ]

app.get('/',function(req,res){
    return res.render('home',{
        contact_list:contactList
    });
});

app.post("/create-contact" ,function(req,res){
    contactList.push({
            name:req.body.name,
            phone:req.body.phone
        });
    return res.redirect('/');
})

app.listen(port,function(err){
    if (err){
        console.log("hey its an error!");
    }
    console.log('Server has been created at: ', port);
});
