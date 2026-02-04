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




module.exports = app