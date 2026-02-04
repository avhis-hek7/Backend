const express = require('express');
const noteModel = require('./models/note.model')

const app = express();
app.use(express.json())


/*
POST/notes => create a notes
GET/notes => get all notes
DELETE/notes/:id => delete a notes
PATCH/notes/:id => updated a notes

*/

app.post('/notes', async(req,res) => {

    const data = req.body
    await noteModel.create({

        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message: "Notes create successfully"
    })


})


app.get('/notes', async(req, res) => {

    const notes = await noteModel.find()

    res.status(200).json({
        message:"Fetching all notes from the backend",
        notes: notes
    })


})



// app.get('/notes', async(req, res) => {

//     const notes = await noteModel.findOne({  find onlyone from the database which title is "test_title"
//         title:"test_title"
//     })

//     res.status(200).json({
//         message:"Fetching all notes from the backend",
//         notes: notes
//     })


// })

app.delete('/notes/:id', async(req,res) => {

    const id = req.params.id

    await  noteModel.findByIdAndDelete({
        _id:id
    })

    res.status(200).json({
        message:"Note deleted successfully"
    })

})


app.patch('/notes/:id', async(req,res) => {

    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate(
        
        {_id:id},
        {
        description: description
    })

    res.status(200).json({
        message:"notes updated successfully"
    })
})



module.exports = app