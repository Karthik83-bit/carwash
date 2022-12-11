const express=require("express")
const app=express();
const mongoose=require("mongoose");
const bookingRoute=require("../backend/Routes/booking")
const cors=require("cors")
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json( ))
app.use("/booking",bookingRoute)


mongoose.connect("mongodb+srv://karthik:K1rt89k@carwashdb.g4gkpgj.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log(`error:${err}`)
})









app.listen(4000,()=>{
    console.log(`server started on port 3000${process.env.PORT}`)
})