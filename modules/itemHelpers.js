const knex = require("knex")
const knexConfig = require("../knexfile")
const db = knex(knexConfig.development)

module.exports = {
    add,
    find,
    findById,
    findByName,
    findByCompleted,
    findAllPriorityInItem,
    update,
    remove
}

async function add(item){   
    const [id] = await db("item")
        .insert(item)

    return await findById(id);
}

async function find(){
    return await db("item");
}

async function findById(id){
   return await db("item")
                .where({id})
                .first()
}
async function findAllPriorityInItem(itemId){
    let filterPriorityInItem = await db("priority")
                                    .join("item","item.id", "=", "priority.item_id")
                                    .where({"item.id":itemId})
    return filterPriorityInItem
}
async function findByName(name){
    return await db("item").where({name});
}

async function findByCompleted(completed){
    return await db("item").where(completed)
}


async function update(id,item){
    await db("item")
        .where({id})
        .update(item)

    return await findById(id);
}
async function remove(id){
    return await db('item')
                .where({id})
                .del()
}