const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post("/create", (req,res) => {

    const token = req.cookies.token;

    if(!token){
       return res.status(401).json({
            message:"Unauthorized"
        })
    }

   try {
    const decoded =  jwt.verify(token,process.env.JWT_SECRET)
    console.log(decoded)
    
   } catch (err) {
    return res.status(401).json({
        message:"Token in invalid"
    })
    
   }


    

    res.send("Post created successfully")
})

module.exports = router;