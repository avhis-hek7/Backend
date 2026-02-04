// this file is responsible for the starting the server

const app = require('./src/app')  // exporting from app from app.js

app.listen('3000', () =>{
    console.log("Server is running port 3000")
})