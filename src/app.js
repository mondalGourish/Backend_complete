//creating the server
const express = require("express")
const app = express()
app.use(express.json()) //middleware -> converts the data into readable format coming from express

//we are building a notes app for user when user can add,edit,delete notes
//we have to create an array to store the notes and we can send notes in the object format

const notes = []

//api method for getting data from frontend to server
app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.status(201).json({message:"Successfully created"})
})
//api method for sending server/backend data to frontend
app.get("/notes",(req,res)=>{
    res.status(200).json({
        message : "notes fetched",
        notes : notes
    })
})


module.exports = app
