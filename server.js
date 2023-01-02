const { setDefaultResultOrder } = require("dns");
const express=require("express");
const {join}=require("path");
var app=express();
const path=require("path");

app.get("/",function(req,resp){
    resp.sendFile(path.join(
      __dirname,"./Public/index.html"  
    ))
});
app.listen(3000);
console.log("server has started");