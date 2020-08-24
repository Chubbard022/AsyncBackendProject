# AsyncBackendProject
Creating an async backend for an example of backend knowledge

## start project
* download all dependencies for project using yarn or npm.
* start server using yarn server or yarn start
    * yarn server is prefered more becuase of the package nodemon being used, it allows the server to restart automatically when a change is made to the backend code.
* use routes given endpoints below

## routes
* List Route
    * get all lists created -->__/api/list__
    * get list by id passed in --> __/api/list/:id__
    * get list by name passed in  --> __/api/list/:name__
    * get list of items within list, given passed in id --> __/api/list.itemsinlist/:id__
    * add new list to database --> __/api/list/newlist__
    * update list given passed in id --> __/api/list/:id__
    * delete list given passed in id --> __/api/list.id__
* Item Route
    * get all items created -->__/api/item__
    * get item by id passed in --> __/api/item/:id__
    * get items that are completion value passed in __/api/item/:completion__
    * get priority of an item given id passed in __/api/item/priorityinitem/:id__
    * add new item to database --> __/api/item__
    * update item given id passed in --> __/api/item/:id__
    * delete item given passed in id --> __/api/item/:id__ 
* Priority Route
    * get all priorities created --> __/api/priority__
    * get priority by id passed in --> __/api/priority/:id__
    * get priority by priority passed in --> __/api/priority/:priority__
    * get priority by deadline passed in --> __/api/priority/:deadline__
    * add new priority to database --> __/api/priority/newPriority__
    * update priority given id passed in --> __/api/priority/:id__
    * delete priority given passed in id --> __/api/priority/:id__ 