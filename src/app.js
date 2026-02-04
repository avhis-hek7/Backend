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



module.exports = app