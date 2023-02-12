
//imports
const express= require('express');
const bodyParser= require('body-parser');
let ejs = require('ejs');
const app=express();
const date= require(__dirname+"/views/date.js");
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use( bodyParser.urlencoded({ extended: true }));



//variable declaration
const items=[];
const workItems=[];



//homepage
app.get('/', (req, res) => {
  const today= date.getFulldate();
  console.log(today);
  res.render('list', {title: today, addTask:items});
  
  
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