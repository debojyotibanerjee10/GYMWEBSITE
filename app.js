const express=require("express");
const fs=require("fs");
const path=require("path");
const hostname="127.0.0.1";
const port=80;
const app=express();
app.set("view engine","pug");
app.set("views",path.join(__dirname,"./views"))
app.get("/",(req,res)=>{
    res.render("home.pug");
})
app.listen(port,()=>{
    console.log(`Server running at ${hostname}:${port}`);
})
