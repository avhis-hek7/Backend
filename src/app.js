const express = require('express');
const postModel = require('./models/post.model');
const multer = require('multer');


const app = express();
app.use(express.json());
const upload = multer({storage:multer.memoryStorage()});


app.post('/create-post', async(req,res) => {
    console.log(req.body)

})





module.exports = app


