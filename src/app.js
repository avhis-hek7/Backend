// This file responsible for creating the server

const express = require('express');

const app = express()     // calling the express server
app.use(express.json())

const notes = []

app.post('/notes',(req,res) => {

    notes.push(req.body)

    res.status(201).json({

        mesaage:"note create successfully"
    })
})

app.get('/notes',(req, res) =>{
    res.status(200).json({
        mesaage: "notes fetch successfully",
        notes:notes
    })
})

app.delete('/notes/:index',(req,res) => {

    const index = req.params.index
    delete notes[index]

    res.status(200).json({
        
        mesaage:"notes deleted successfully"
    })
})



module.exports = app