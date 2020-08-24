const knex = require("knex")
const knexConfig = require("../knexfile")
const db = knex(knexConfig.development)

module.exports = {
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

async function findByPriority(priority){
    return await db("priority")
                    .where({priority})
}
async function findByDate(deadline){
    return await db("priority")
                    .where({deadline})
}
async function update(id,updatedPriority){
    return await db("priority")
        .where({id})
        .update(updatedPriority)
}
async function remove(id){
    return db("priority")
        .where({id})
        .del()
}