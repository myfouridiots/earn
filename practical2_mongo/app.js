const express = require('express')
const mongoose = require('mongoose')
const app = express();
const url = 'mongodb://0.0.0.0/node'
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on("open",function(){
    console.log("connected......")
})

app.use(express.json())

const alienRouter = require('./routers/aliens')
app.use('/alien', alienRouter)
app.get("/",(req,res)=>{
    res.send("hello world!!");
} );

app.listen(3000 , function(){
    console.log("server started");
})