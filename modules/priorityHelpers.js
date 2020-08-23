const knex = require("knex")
const knexConfig = require("../knexfile")
const db = knex(knexConfig.development)

module.export = {
    add,
    find,
    findbyId,
    findByPriority,
    findByDate,
    update,
    remove
}

async function add(newPriority){
    const [id] = await db("priority")
        .insert(newPriority)
    return await findbyId(id);
}

async function find(){
    return await db("priority")
}

async function findbyId(id){
    return await db("priority")
                    .where({id})
                    .first()

}

function findByPriority(){
    //find all items within list, return in descending order their priority
}
function findByDate(){
    //find all items within list, return in descending order their deadline
}
function update(id,updatedPriority){
    await db("priority")
        .where({id})
        .update(updatedPriority)
}
function remove(id){
    return db("priority")
        .where({id})
        .del()
}