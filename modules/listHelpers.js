const knex = require("knex")
const knexConfig = require("../knexfile")
const db = knex(knexConfig.development)

module.exports = {
    add,
    find,
    findById,
    findByName,
    findAllItemsInList,
    update,
    remove
}

//creates a list
async function add(list){
    const [id] = await db("list")
        .insert(list)    
    return findById(id);
}
//returns a list of all todo lists created
async function find(){
    return await db("list");
}
//returning the instance where the passed in list id matches in the dataBase
async function findById(id){
    return await db("list").where({id})
}

// returning the instance where the passed in name matches in the dataBase
async function findByName(name){
    return await db("list").where({name})
}
async function findAllItemsInList(listId){
    let filteritemsInList = await db("item")
                            .join("list","list.id","=","item.list_id")
                            .where({"list.id":listId})
                        
    return filteritemsInList;
}
//updated a list based on an id, where list is updating old list
async function update(id,list){
    await db("list")
        .where({id})
        .update(list)

    return await findById(id);
}
//removes a list based on the id
async function remove(id){
    return await db("list")
        .where({id})
        .del()
}

