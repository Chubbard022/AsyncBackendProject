const knex = require("knex")
const knexConfig = require("../knexfile")
const db = knex(knexConfig.development)

module.exports = {
    add,
    find,
    findById,
    findByName,
    update,
    remove
}

//creates a list
async function add(list){
    const [id] = await db("list")
        .insert(list)
        .returning("id")
    
    return findById(id);
}
//returns a list of all todo lists created
function find(){
    return db("list");
}
//returning the instance where the passed in list id matches in the dataBase
function findById(id){
    return db("list").where({id})
}

// returning the instance where the passed in name matches in the dataBase
function findByName(name){
    return db("list").where({name})
}
//updated a list based on an id, where list is updating old list
async function update(id,list){
    await db("list")
        .where({id})
        .update(list)

        return await findById(id);
}
//removes a list based on the id
function remove(id){
    return db("list")
        .where({id})
        .del()
}

