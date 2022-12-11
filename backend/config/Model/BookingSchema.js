const mongoose=require("mongoose");

const BookingSchema=new mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:user},
    user_name:String,
    user_mail:String,
  
    car_model:String,
    date:Date,
    prefer_time:String,
    status:{
        type:String,
        default:"Pending"
    }

})

module.exports=  new mongoose.model("BookingModel",BookingSchema);
