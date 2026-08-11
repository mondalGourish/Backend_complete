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
//api method to delete from the backend
/*/notes/index -> we need to delete the node on the given index for that /notes/ upto this part is static and the index part is dynamic which is also known as param and denoted by :index */
app.delete("/notes/:index",(req,res)=>{

    //we need get params for the index
        const index = req.params.index
        delete notes[index];

        res.status(200).json({
            message:"note deleted"
        })
})
/*api to update the existing node -> patch
get index -> get the body -> update the body -> return 200 status
*/
app.patch("/notes/:index",(req,res)=>{

    //get the info
    const index = req.params.index
    const description = req.body.description
    const title = req.body.title

    //update the info
    notes[index].description = description
    notes[index].title = title
    res.status(200).json({
        message:"Updated Successfully"
    })
})


module.exports = app
