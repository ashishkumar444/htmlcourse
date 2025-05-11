const express=require('express')
const app=express()
require('dotenv').config()
app.use(express.urlencoded({extended:false}))
const session=require('express-session')
const parkingRouter=require('./router/parkingRouter')
const mongoose=require('mongoose')
mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)

 
app.use(session({
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000*60*5}
}))
app.use(parkingRouter)
app.use(express.static('public'))
app.set('view engine','ejs')
app.listen(process.env.PORT,()=>{console.log(`server is running on port${process.env.PORT}`)})