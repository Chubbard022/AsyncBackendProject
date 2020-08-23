const express = require("express")

const listRoutes = require("../routes/listRoutes.js")
const itemRoutes = require("../routes/itemRoutes")

//setting up server
const server = express();
server.use(express.json())

server.use("/api/list",listRoutes)
server.use("/api/items",itemRoutes)

server.use("/",(req,res)=>{
    res.status(200).json("server working")
})

//server listening on port 3500
const port = 3500;
server.listen(port,()=>{
    console.log(`Server listening on ${port}`)
})

module.exports = server;     