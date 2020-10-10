const express= require('express');
const path=require('path');
const port=4000;

const db=require('./config/mongoose');
const Contact=require('./models/contact');
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
    Contact.find({},function(err,contacts){
        if (err){
            console.log('error in fetching contacts from db');
            return ;
        }
    
    })
    return res.render('home',{
        title:"My Contacts List",
        contact_list:Contact
    });
});

app.post("/create-contact" ,function(req,res){
    // contactList.push({
    //         name:req.body.name,
    //         phone:req.body.phone
    //     });
    Contact.create({
        name :req.body.name,
        phone:req.body.phone
    },function(err,newContact){
        if(err){
            console.log('error in creating a new contact!');
            return ;

        }
        console.log('*******',newContact);
        return res.redirect('back');
    });
    });
app.get('/delete-contact/',function(req,res){
    let phone=req.query.phone;
    let contactIndex=contactList.findIndex(contact => contact.phone==phone);
    if (contactIndex!=-1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect('back');
});
app.listen(port,function(err){
    if (err){
        console.log("hey its an error!");
    }
    console.log('Server has been created at: ', port);
});

//ye 3 terminal the
// plz resolev ok si r ty