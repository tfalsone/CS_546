const todos = require("./todo");
const connection = require("./mongoConnection");

async function main() {
  const dinosaurs = await todos.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
  console.log("Dinosaurs task has been added");
  console.log(dinosaurs);

  const pokemon = await todos.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
  console.log("Pokemon task has been added");
  console.log(pokemon);

  let allTodos = await todos.getAllTasks();
  console.log("All todos currently in list:");
  console.log(allTodos);

  console.log("Removing first task");
  const dinosaursId = dinosaurs._id;
  todos.removeTask(dinosaursId);

  allTodos = await todos.getAllTasks();
  console.log("Remaining tasks on todo list:");
  console.log(allTodos);

  const pokemonId = pokemon._id;
  const completedPokemon = await todos.completeTask(pokemonId);
  console.log("The pokemon task has been completed");
  console.log(completedPokemon);

  await closeDb();
}

async function closeDb() {
  const db = await connection();
  await db.serverConfig.close();
}

main();
