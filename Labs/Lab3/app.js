const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"));

const textMetric = require("./textMetric");
const fileData = require("./fileData");

async function main() {
  for (var i = 1; i < 4; i++) {
    let currentFile = `chapter${i}`;
    if (fs.exists(`${currentFile}.result.json`)) {
      let JSONobj = require(`./${currentFile}.result.json`);
      var obj = JSON.parse(jsonQuery);
      console.log(obj);
    } else {
      let stringFromFile = await fileData.getFileAsString(`${currentFile}.txt`);
      let simpleText = textMetric.simplify(stringFile);
      await fileData.saveStringToFile(`./${currentFile}.debug.txt`, simpleText);
      let metricObj = textMetric.createMetrics(simpleText);
      await fileData.saveJSONToFile(`./${currentFile}.result.json`, metricObj);
      console.log(metricObj);
    }
  }
  return null;
}

main();
