const router = require("express").Router()
const itemHelpers = require("../modules/itemHelpers")

//get all items created
router.get("/", async (req,res)=>{
    try{
        let itemList = await itemHelpers.find();
        res.status(200).json(itemList)
    }catch(errors){
        res.status(500).json({
            errorMessage:
            "Sorry but something went wrong while retrieving all items"
        })
        throw new Error(error)
    }
})

//get item by its ID
router.get("/:id", async (req,res)=>{
    try{
        let itemId = req.params.id;
        let findItemById = itemHelpers.findById(itemId);

        res.status(201).json(findItemById)
    }catch(error){
        res.status(500).json({
            errorMessage:
            "Sorry but something went wrong while retrieving an item"
        })
        throw new Error(error)
    }
})

// get item by its name
router.get("/:name", async (req,res)=>{
    try{
        let itemName = req.params.name;
        let findItemByName = itemHelpers.findByName(itemName);

        res.status(201).json(findItemByName)
    }
    catch(error){
        res.status(500).json({
            errorMessage:
            "Sorry but something went wrong while retrieving an item"
        })
        throw new Error(error)
    }
})

//get list of items that have been completed
router.get("/:completed", async (req,res)=>{
    try{
        let itemCompletion = req.params.completed;
        let findItemsCompleted = itemHelpers.findByCompleted(itemCompletion);

        res.status(200).json(findByCompleted)
    }
    catch(error){
        res.status(500).json({
            errorMessage:
            "Sorry but something went wrong while retrieving an item"
        })
        throw new Error(error)
    }
})

//add an item to an existing list
router.post("/newItem", async (req,res)=>{
    try{
        let newItem = req.body;
        let addItem = await itemHelpers.add(newItem)

        res.status(201).json({
            successMessage: "Successfully created new item",
            addItem
        })
    }
    catch(error){
        res.status(500).json({
            errorMessage:
            "Sorry but something went wrong while creating a new item"
        })
        throw new Error(error)
    }
})

//update an item given its ID
router.put("/:id", async (req,res)=>{
    try{
        let itemId = req.params.id;
        let itemToUpdate = req.body;
        let updateItem = itemHelpers.update(itemId,itemToUpdate)

        res.status(203).json({
            successMessage: "Successfully updated item",
            updateItem
        })
    }
    catch(error){
        res.status(500).json({
            errorMessage:
            "Sorry but something went wrong while creating a new item"
        })

        throw new Error(error)
    }
})

//delete an item given its ID
router.delete("/:id", async (req,res)=>{
    try{
        let itemId = req.params.id;
        let delteItem = itemHelpers.remove(itemId);

        res.status(200).json({
            successMessage: "Successfully deleted an item",
            delteItem
        })
    }
    catch(error){
        res.status(500).json({
            errorMessage:
            "Sorry but something went wrong while deleting an item"
        })
        throw new Error(error)
    }
})


module.exports = router;