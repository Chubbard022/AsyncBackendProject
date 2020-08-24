const router = require("express").Router()
const listHelpers = require("../modules/listHelpers")


//get all lists created
router.get("/", async(req,res)=>{
    try {
        const list = await listHelpers.find();

        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({
            errorMessage:
            "Sorry but something went wrong while retrieving all lists"
        })
    
        throw new Error(error);
    }
})

//getting a secific list based off it id
router.get("/:id", async (req,res)=>{
    try{
        let listId = req.params.id;
        let findListById = await listHelpers.findById(listId)

        res.status(200).json(findListById)
    }catch(error){
        res.status(401).json({
            errorMessage: "Sorry but something went wrong while retrieving lists"
        })

        throw new Error(error)
    }
})

//getting a specific list by name
router.get("/name/:name", async (req,res)=>{
    try{
        let listName = req.params.name;
        let findListById = await listHelpers.findByName(listName)

        res.status(200).json(findListById)
    }catch(error){
        res.status(500).json({
            errorMessage: "Sorry but something went wrong while retrieving lists"
        })
        throw new Error(error)
    }
})

//getting all items within a list
router.get("/itemsinlist/:id", async(req,res)=>{
    try{
        let listId = req.params.id;
        let itemsInList = await listHelpers.findAllItemsInList(listId);

        res.status(200).json(itemsInList)

    }catch(error){
        res.status(500).json({
            errorMessage: "Sorry but something went wrong while retrieving items in list"
        })
        throw new Error(error)
    }
})

//creates a new list
router.post("/newlist", async(req,res)=>{
    try {
        let newItem = req.body;
        let addItem = await listHelpers.add(newItem);
        
        res.status(201).json(addItem);
    }catch (error) {
        res.status(500).json({
            errorMessage:
            "Sorry but something went wrong while creating a new list"
        })

        throw new Error(error);
    }
})

//updating a list based off its ID
router.put("/:id", async (req,res)=>{
    try{
        let listId = req.params.id;
        let listToUpdate = req.body;
        let updateList = await listHelpers.update(listId,listToUpdate)

        res.status(200).json(updateList)
    }
    catch(error){
        res.status(500).json({
            errorMessage:
            "Sorry but something went wrong while creating a new list"
        })

        throw new Error(error)
    }
})

//deletes an existing list based off its ID
router.delete("/:id", async (req,res)=>{
    try {
        let item = req.params.id;
        let deleteItem = await listHelpers.remove(item);
        res.status(200).json(deleteItem);
    } catch (error) {
        res.status(500).json({
            errorMessage:
            "Sorry but something went wrong while retrieving the list of users"
        })
        
        throw new Error(error);
    }
})

module.exports = router;