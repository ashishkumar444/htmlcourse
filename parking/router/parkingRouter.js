const Router=require('express').Router()
const regC=require('../controller/regcontroller')
const parkingC=require('../controller/parkingcontroller')
const handleLogin=require('../helper/handleLogin') 

Router.get('/',regC.loginpage)
Router.post('/',regC.logincheck)
Router.get('/parking',handleLogin,parkingC.parkingpage)
Router.get('/logout',parkingC.logout)
Router.get('/add',handleLogin,parkingC.entryform)
Router.post('/add',parkingC.entryadd)
Router.get('/out',handleLogin,parkingC.out)
Router.get('/parkingUpdate/:id',handleLogin,parkingC.claculation)
Router.get('/print/:id',handleLogin,parkingC.print)
 
module.exports=Router

