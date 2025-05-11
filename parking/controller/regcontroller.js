const Reg=require('../modles/reg')

    
exports.loginpage=(req,res)=>{
    res.render('login.ejs',{message:''})
}
exports.logincheck=async(req,res)=>{
    const{Username,Password}=req.body
   const record=await Reg.findOne({username:Username})
   //console.log(record)
   if(record!==null){ 
    if(record.password==Password){
        req.session.isAuth=true
        req.session.username=record.username
        req.session.userid=record.id
        res.redirect('/parking')
    }else{
        res.render('login.ejs',{message:'something went Wrong !!'})

    }
     
   }else{
    res.render('login.ejs',{message:'something went Wrong !!'})
   }
}