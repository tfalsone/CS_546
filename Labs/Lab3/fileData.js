const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
  if (!path) throw "You must provide a path";

  console.log('Reading file');
  // try {
  //   const fileContent = await fs.readFileAsync(path, 'utf8');
  // } catch (error) {
  //   console.error(error);
  //   throw "There was a problem reading the file";
  // }

  const fileContent = await fs.readFileAsync(path, 'utf8');

  return fileContent;
}

async function getFileAsJSON(path) {
  if (!path) throw "You must provide a path";

  console.log("Converting string to JSON");
  // try {
  //   // TODO- Does this need an await?
  //   const fileContent = await getFileAsString(path);
  //   const fileContentJSON = JSON.parse(fileContent);
  // } catch (error) {
  //   console.error(error);
  //   throw "There was a problem parsing into a JSON object";
  // }
  const fileContent = await getFileAsString(path);
  const fileContentJSON = JSON.parse(fileContent);

  return fileContentJSON;
}

async function saveStringToFile(path, text) {
  if (!path) throw "You must provide a path";
  if (typeof text != "string") throw "The text is not a string";
  if (!text) throw "You must provide text";

  console.log(`Saving text to file path ${path}`);
  // try {
  //   await fs.writeFileAsync(path, text);
  // } catch (error) {
  //   console.error(error);
  //   throw "There was a problem saving the string to a file";
  // }
  await fs.writeFileAsync(path, text);
  return true;
}

async function saveJSONToFile(path, obj) {
  if (!path) throw "You must provide a path";
  if (typeof obj != "object") throw "The parameter must be an object";
  if (!obj) throw "You must provide an object";

  const JSONString = JSON.stringify(obj);
  console.log(`Saving JSON to file path ${path}`);
  // try {
  //   await fs.writeFileAsync(path, JSONString);
  // } catch (error) {
  //   console.error(error);
  //   throw "There was a problem saving the JSON object to a file";
  // }
  await fs.writeFileAsync(path, JSONString);
  return true;
}

module.exports = {
  getFileAsString,
  getFileAsJSON,
  saveStringToFile,
  saveJSONToFile
}
