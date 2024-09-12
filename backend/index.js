const express = require("express");

const app = express();

app.get("/api",(req,res)=>{
    return res.json({message:"hello from server"});
});

app.listen(8027,()=>{
    console.log("server started..");
});