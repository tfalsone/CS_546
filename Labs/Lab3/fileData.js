const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"));

module.exports = {
  description: "Async functions on file data for Lab 3",


  async function getFileAsString(path) {
    if (!path) throw "You must provide a path";

    console.log('Reading file');
    try {
      const fileContent = await fs.readFileAsync(path, 'utf8');
    } catch (error) {
      console.error(error);
      throw "There was a problem reading the file";
    }

    return fileContent;
  },

  async function getFileAsJSON(path) {
    if (!path) throw "You must provide a path";

    console.log("Converting string to JSON");
    try {
      // TODO- Does this need an await?
      const fileContent = getFileAsString(path);
      const fileContentJSON = JSON.parse(fileContent);
    } catch (error) {
      console.error(error);
      throw "There was a problem parsing into a JSON object";
    }

    return fileContentJSON;
  },

  async function saveStringToFile(path, text) {
    if (!path) throw "You must provide a path";
    if (!text) throw "You must provide text";

    console.log(`Saving text to file path ${path}`);
    try {
      await fs.writeFileAsync(path, text);
    } catch (error) {
      console.error(error);
      throw "There was a problem saving the string to a file";
    }

    return true;
  },

  async function saveJSONToFile(path, obj) {
    if (!path) throw "You must provide a path";
    if (!text) throw "You must provide text";

    const JSONString = JSON.stringify(obj);

    try {
      console.log(`Saving JSON to file path ${path}`);
      await fs.writeFileAsync(path, JSONString);
    } catch (error) {
      console.error(error);
      throw "There was a problem saving the JSON object to a file";
    }

    return true;
  }
}
