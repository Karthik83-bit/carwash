const mongoose= require("mongoose");
const userSchema=new mongoose.Schema({
    user_name:String,
    user_email:String,
    user_password:String,
})