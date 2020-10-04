const express= require('express');
const path=require('path');
const port=4000;
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
var contactList=[
    {
        name:"Vanshika",
        phone:"9999999999"
    },
    {
        name:"Bhavya",
        phone:"9898989898"
    },
    {
        name:"Mentor",
        phone:"123456789"
    }
]

app.get('/',function(req,res){
    return res.render('home',{
        contact_list:contactList
    });
});

app.post("/create-contact" ,function(req,res){
    console.log(req.body)
})

app.listen(port,function(err){
    if (err){
        console.log("hey its an error!");
    }
    console.log('Server has been created at: ', port);
});
