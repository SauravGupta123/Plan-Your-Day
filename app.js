const express= require('express');
const bodyParser= require('body-parser');
let ejs = require('ejs');
const app=express();
// const fs = require("fs");
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use( bodyParser.urlencoded({ extended: true }));
let size=0;
var items=[];
let workItems=[];



let currDate= new Date();

var options = { 
    weekday: 'long',
     year: 'numeric', 
     month: 'long', 
     day: 'numeric' 
    };



currDate= currDate.toLocaleDateString("en-US", options);

app.get('/', (req, res) => {
  res.render('list', {title: currDate, addTask:items});
  
  
});

//when user adds item and presses Add task button
app.post('/',(req,res)=>{
  
    if(req.body.reqFrom==="Work"){
      workItems.push(req.body.newTask);
      res.redirect("/work");
    }
    else{

      items.push(req.body.newTask);     //new task is added to the items array
      
      
      res.redirect('/');     // the page is redirected to homepage and new item is rendered automatically
    }


});




//for worklist

app.get("/work",function(req,res){

  res.render('list',{title: "Work list", addTask: workItems });
})


app.post('/work',function(req,res){

});


//for about page

app.get("/about",function(req,res){

  res.render('about');
})


app.listen(3000,function(){
console.log("server is started at port 3000");

});