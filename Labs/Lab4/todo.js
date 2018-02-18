const mongoCollections = require("./mongoCollection");
const todoItems = mongoCollections.todoItems;

const uuidv4 = require('uuid/v4');

async function createTask(title, description) {
  if (!title) { throw "You must provide a title for the task"; }
  if (!description) { throw "You must provide a description for the task"; }

  const todoCollection = await todoItems();
  let newTodo = {
    _id : uuidv4(), // generate with uuid
    title : title,
    description : description,
    completed : false,
    completedAt : null
  };

  const insertInfo = await todoCollection.insertOne(newTodo);
  if (insertInfo.insertedCount === 0) { throw "Unable to add todo item"; }
  const newId = insertInfo.insertedId;
  const todoItem = await this.getTask(newId);

  return todoItem;
}

async function getAllTasks() {
  const todoCollection = await todoItems();

  const todoItemList = await todoCollection.find({}).toArray();

  return todoItemList;
}

async function getTask(id) {
  if (!id) throw "You must provide an id to search for";

  const todoCollection = await todoItems();
  const todoItem = await todoCollection.findOne({ _id: id });
  if (todoItem === null) throw "No todo item with that id";

  return todoItem;
}

async function completeTask(taskId) {
  const todoCollection = await todoItems();
  const todoItem = await this.getTask(taskId);
  const id = todoItem._id;
  const title = todoItem.title;
  const description = todoItem.description;

  var timestamp = Date.now()

  const updatedTodo = {
    _id : id,
    title : title,
    description : description,
    completed : true,
    completedAt : timestamp
  };

  const updateInfo = await todoCollection.replaceOne({_id : id}, updatedTodo);
  if (updateInfo === 0) throw "Unable to update todo item";

  return await this.getTask(id);
}

async function removeTask(id) {
  if (!id) throw "You must provide an id to search for";

  const todoCollection = await todoItems();
  const deletionInfo = await todoCollection.removeOne({ _id: id });

  if (deletionInfo.deletedCount === 0) {
    throw `Could not delete todo with id of ${id}`;
  }
}

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  completeTask,
  removeTask
}
