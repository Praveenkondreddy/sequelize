const express=require("express")
const sequelize=require('./config/database')
const User=require('./models/user')
const bodyparser=require('body-parser')
const Gig =require('./models/gig')


const app=express()
app.use(express.json())

app.get("/gigs",async (req,res)=>{

   const arr= await User.findAll()
   res.send(arr)
})


 
app.listen("8081",()=>{
    console.log("server listens on port 8081..")
})