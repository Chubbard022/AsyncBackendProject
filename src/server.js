//setting up server
const server = express();
server.use(express.json())

//server listening on port 3500
const port = 3500;
server.listen(port,()=>{
    console.log(`Server listening on ${port}`)
})

module.exports = server;     
