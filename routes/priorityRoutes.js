const router = require("express").Router()
const priorityHelpers = require("../modules/priorityHelpers")

//returns a list of all priorities and which associated items
router.get("/", async (req,res)=>{
    try{

    }catch(error){

    }
})

//returns a priority item based on their id
router.get("/:id", async (req,res)=>{
    try{

    }catch(error){
        
    }
})

//returns a list of priorities based on passed in priority
router.get("/:priority", async (req,res)=>{
    try{

    }catch(error){
        
    }
})

//returns a list of priorities based on deadline passed in
router.get("/:deadline", async (req,res)=>{
    try{

    }catch(error){
        
    }
})

//created a new priority
router.post("/newPriority", async (req,res)=>{
    try{

    }catch(error){
        
    }
})

//updates an existing priority given id
router.put("/:id", async (req,res)=>{
    try{

    }catch(error){
        
    }
})

//deleted a priority given an id
router.delete("/:id", async (req,res)=>{
    try{

    }catch(error){
        
    }
})