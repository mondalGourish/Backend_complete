const express = require("express");
//server creation
const app = express(); //creates the instance of a server

//routing
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("about");
});


//server starting
app.listen(4000,()=>{
    console.log("Server running on port")
}); //starting the server
