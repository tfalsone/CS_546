const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const mongoCollections = require("./mongoCollection");
const todo = mongoCollections.todo;

const uuidv4 = require('uuid/v4');

async function createTask(title, description) {
  if (!title) { throw "You must provide a title for the task"; }
  if (!description) { throw "You must provide a description for the task"; }

  const todoCollection = await todo();
  let newTodo = {
    _id : uuidv4(), // generate with uuid
    title : title,
    description : description,
    completed : false,
    completedAt : NULL
  };

  const insertInfo = await todoCollection.insertOne(newTodo);
  if (insertInfo.insertedCount === 0) { throw "Unable to add todo item"; }
  const newId = insertInfo.insertedId;
  const todoItem = await this.getTask(newId);

  return todoItem;
}

async function getAllTasks() {
  const todoCollection = await todo();

  const todoItems = await todoCollection.find({}).toArray();

  return todoItems;
}

async function getTask(id) {
  if (!id) throw "You must provide an id to search for";

  const todoCollection = await todo();
  const todoItem = await todoCollection.findOne({ _id: id });
  if (todoItem === null) throw "No todo item with that id";

  return todoItem;
}

async function completeTask(taskId) {
  const todoCollection = await todo();
  const todoItem = await this.getTask(taskId);
  const id = todoItem._id;
  const title = todoItem.title;
  const description = todoItem.description;

  const updatedTodo = {
    _id : id,
    title : title,
    description : description,
    completed : true,
    completedAt : Data.prototype.toLocaleFormat()
  };

  const updateInfo = await todoCollection.updateOne({_id : id}, updatedTodo);
  if (updateInfo === 0) throw "Unable to update todo item";

  return await this.getTask(id);
}

async function removeTask(id) {
  if (!id) throw "You must provide an id to search for";

  const todoCollection = await todo();
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
