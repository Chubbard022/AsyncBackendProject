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

function findByPriority(priorty){
    return await db("priority")
                    .where({priorty})
                    .first()
}
function findByDate(deadline){
    return await db("priority")
                    .where({deadline})
                    .first()
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