const mongoose = require('mongoose')

async function connectDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB is connected");
    } catch (err) {
        console.log("Database connection error",err);

        
    }
    
}

module.exports = connectDB