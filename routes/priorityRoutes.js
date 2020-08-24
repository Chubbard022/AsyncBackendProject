const router = require("express").Router()
const priorityHelpers = require("../modules/priorityHelpers")

//returns a list of all priorities and which associated items
router.get("/", async (req,res)=>{
    try{
        let priorityList = await priorityHelpers.find();

        res.status(200).json(priorityList)
    }catch(error){
        res.status(500).json({
            errorMessage:  "Sorry but something went wrong while retrieving all priorities"
        })
        throw new Error(error)
    }
})

//returns a priority item based on their id
router.get("/:id", async (req,res)=>{
    try{
        let priorityId = req.params.id;
        let getPriorityById = await priorityHelpers.findbyId(priorityId)

        res.status(200).json(getPriorityById)
    }catch(error){
        res.status(500).json({
            errorMessage: "Sorry but something went wrong while retrieving priority by id"
        })
        throw new Error(error)
    }
})

//returns a list of priorities based on passed in priority
router.get("/:priority", async (req,res)=>{
    try{
        let getPriority = req.params.priority;
        let findByPriority = await priorityHelpers.findByPriority(getPriority);

        res.status(200).json(findByPriority)
    }catch(error){
        res.status(500).json({
            errorMessage: "Sorry but something went wrong while retrieving priority by priority"
        })
        throw new Error(error)
    }
})

//returns a list of priorities based on deadline passed in
router.get("/:deadline", async (req,res)=>{
    try{
        let getDeadline = req.params.deadline;
        let findPriorityByDeadline = await priorityHelpers.findByDate(getDeadline);

        res.status(200).json(findPriorityByDeadline)
    }catch(error){
        res.status(500).json({
            errorMessage: "Sorry but something went wrong while retrieving priority by deadline"
        })
        throw new Error(error)
    }
})

//created a new priority
router.post("/newPriority", async (req,res)=>{
    try{
        let newPriority = req.body;
        let addNewPriority = await priorityHelpers.add(newPriority)

        res.status(201).json(addNewPriority)
    }catch(error){
        res.status(500).json({
            errorMessage: "Sorry but something went wrong while adding new priority"
        })
        throw new Error(error)
    }
})

//updates an existing priority given id
router.put("/:id", async (req,res)=>{
    try{
        let priorityId = req.params.id;
        let priorityToUpdate = req.body;
        let updatedPriority = await priorityHelpers.update(priorityId,priorityToUpdate);

        res.status(200).json(updatedPriority)
    }catch(error){
        res.status(500).json({
            errorMessage: "Sorry but something went wrong while adding new priority"
        })
        throw new Error(error)
    }
})

//deleted a priority given an id
router.delete("/:id", async (req,res)=>{
    try{
        let priorityId = req.params.id;
        let deletePriority = await priorityHelpers.remove(priorityId)

        res.status(200).json(deletePriority)
    }catch(error){
        res.status(500).json({
            errorMessage: "Sorry but something went wrong while adding new priority"
        })
        throw new Error(error)
    }
})