const server = require("./server.js")
const port = 3500;

server.listen(port,()=>{
    console.log(`Server listening on ${port}`)
})