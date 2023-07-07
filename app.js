const express=require("express");
const fs=require("fs");
const path=require("path");
const port=3000;
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const dotenv=require("dotenv")
dotenv.config()
const url=process.env.url;
mongoose.connect(url,{useNewUrlParser:true});
const app=express();
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
var blueprint=new mongoose.Schema({
    name:String,   
    age:String,
    gender:String,
    address:String,
    email:String
})
var contact=mongoose.model("username",blueprint) 
app.set("view engine","pug");
app.set("views",path.join(__dirname,"./views"))
app.get("/",(req,res)=>{
    res.render("home.pug");
})
app.get("/contact",(req,res)=>{
    res.render("contact.pug");
}) 
app.post("/contact",(req,res)=>{
    var newdata=new contact(req.body);
    newdata.save().then(()=>{
        res.send("Form submitted")
    }).catch(()=>{
        res.send("Not succesfull");
    })
}) 
app.listen(port,()=>{
    console.log(`Server running at ${port}`);
})