const mongoose = require('mongoose');

async function connectDB(){
     await mongoose.connect("mongodb+srv://yt:jYiaCMccDm6Gzz03@complete-backend.tkdqpmm.mongodb.net/halley")

     console.log("Connected to db")
    
}

module.exports = connectDB