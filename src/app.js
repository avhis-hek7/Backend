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
    
    const post = await postModel.create({
        image:result.url,
        caption:req.body.caption
    })

    return res.status(201).json({
        message:"Post created successfully",
        post
    })
})


app.get('/posts', async (req,res)=>{

    const post = await postModel.find()

    return res.status(200).json({
        message:"Posts fetch Successfully",
        post
    })
})




module.exports = app


