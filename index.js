//1 load .env file
require('dotenv').config()

//2 import express
const express = require('express') 
//6 import cors
const cors = require('cors')

const db= require('./DB/connection')

const router = require('./Routes/router')
//const ApplicationMiddleware = require('./Middlewares/ApplicationMiddleWare')

//3 create an app using expres
const pfServer = express()

//7 use
pfServer.use(cors())
pfServer.use(express.json())
// pfServer.use(ApplicationMiddleware)
pfServer.use(router)
//export image to frontend
pfServer.use('/uploads',express.static('./uploads'))

//4 port creation
const PORT = 3000 || process.env.PORT
//5 run
pfServer.listen(PORT,()=>{
    console.log("PfServer running on the port "+PORT);
    
})

pfServer.get('/',(req,res)=>{
    res.send("Welcome to PF Server")
})