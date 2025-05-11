const Parking = require('../modles/parking')
 

exports.parkingpage = async (req, res) => {
  const record = await Parking.find().sort({status:1})
  res.render('parking.ejs', { username: req.session.username, record })
}
exports.logout = (req, res) => {
  req.session.destroy()
  res.redirect('/')
}
exports.entryform = (req, res) => {
  res.render('entryform.ejs', { username: req.session.username })
}
exports.entryadd = async (req, res) => {
  const { Vehicleno, vtype } = req.body
  const record = new Parking({ vno: Vehicleno, vtype: vtype, })
  record.save()
  res.redirect('/parking')
}


exports.out = async (req, res) => {
  const record = await Parking.find().sort({status:1})
  res.render('outparked.ejs', { username: req.session.username, record })
}

exports.claculation = async (req, res) => {
  const id = req.params.id
   const vout=new Date()
  const record=await Parking.findById(id)
  const vin = new Date(record.vin);
   const totaltiming=(vout-vin)/(1000*60*60)
   
   amount=null
   if(record.vtype=='2w'){
    amount=totaltiming*30
   }else if(record.vtype=='3w'){
    amount=totaltiming*50
   }else if(record.vtype=='4w'){
    amount=totaltiming*80
   }else if(record.vtype=='lw'){
    amount=totaltiming*100
   }else if(record.vtype=='hw'){
    amount=totaltiming*150
   }else{
    amount=totaltiming*70
   }
     if(amount<30){
      amount=30
     }
   await Parking.findByIdAndUpdate(id,{vout:vout,amount:Math.round(amount),status:'out'})
   res.redirect('/out')
}
exports.print= async(req,res)=>{
  const id = req.params.id
  const vout=new Date()
 const totalrecord=await Parking.findById(id)
 const vin = new Date(totalrecord.vin);
  const totaltiming=(vout-vin)/(1000*60*60)
  const record=await Parking.findById(req.params.id)
   res.render('print.ejs',{record,totaltiming})
 
}