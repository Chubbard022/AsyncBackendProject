const knex = require("knex")
const knexConfig = require("../knexfile")
const db = knex(knexConfig.development)

module.export = {
    add,
    find,
    findById,
    findByName,
    findByCompleted,
    update,
    remove
}

async function add(item){   
    const [id] = await db("item")
        .insert(item)
        .returning("id")

    return findById(id);
}

function find(){
    return db("item");
}

async function findById(id){
   return  db("item")
        .where({id})
        .first()
}

function findByName(name){
    return db("item").where({name});
}

function findByCompleted(completed){
    return db("item").where(completed)
}

async function update(id,item){
    await db("item")
        .where({id})
        .update(item)

        return await findById(id);
}
async function remove(id){
    db('item')
        .where({id})
        .del()
}