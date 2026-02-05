const mongoose = require('mongoose');


async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:jYiaCMccDm6Gzz03@complete-backend.tkdqpmm.mongodb.net/project-1")
    console.log("Connected to DB")
}

module.exports = connectDB