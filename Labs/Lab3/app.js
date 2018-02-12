const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"));

const textMetric = require("./textMetric");
const fileData = require("./fileData");

async function main() {
  for (var i = 1; i < 4; i++) {
    let currentFile = `chapter${i}`;
    console.log(`Starting work on ${currentFile}`);
    if (fs.exists(`${currentFile}.result.json`)) {
      let JSONobj = require(`./result-files${currentFile}.result.json`);
      var obj = JSON.parse(jsonQuery);
      console.log(obj);
    } else {
      console.log(`The file for ${currentFile} does not exist, building it now...`);
      let stringFromFile = await fileData.getFileAsString(`./text-files/${currentFile}.txt`);
      let simpleText = textMetric.simplify(stringFromFile);
      await fileData.saveStringToFile(`./debug-files/${currentFile}.debug.txt`, simpleText);
      let metricObj = textMetric.createMetrics(simpleText);
      await fileData.saveJSONToFile(`./result-files/${currentFile}.result.json`, metricObj);
      console.log(metricObj);
    }
  }
  return null;
}

main();
