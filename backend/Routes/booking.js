const router=require("express").Router();


router.post("/",(req,res)=>{
    console.log(req.body.form)
res.send("kjghk")
})

module.exports= router;