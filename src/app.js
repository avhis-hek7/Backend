const express = require('express');
const postModel = require('./models/post.model');
const multer = require('multer');
const uploadFile = require('./services/storage.service')


const app = express();
app.use(express.json());
const upload = multer({storage:multer.memoryStorage()});


app.post('/create-post', upload.single("image"), async(req,res) => {
    console.log(req.body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer)
    console.log(result)

})





module.exports = app


