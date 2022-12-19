const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const app=express();
var ans="";
var result="";

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render("index", {msg:result,ans:ans});
})

app.post("/",(req,res)=>{
    text=req.body.name;
    console.log(text);
    const toTextString = require("to-text-string");
    var sls = require('single-line-string');
    var Urls = require('my-name-is-url');
    result = toTextString(text);
 
    ans=Urls(result).get();
    
    res.redirect("/");
    
})
app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000");
})