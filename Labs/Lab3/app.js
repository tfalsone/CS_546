const textMetric = require("./textMetric");

let test = " This is a   11 test string!! \n And this is a New line with a loooooong word |";

let simpleText = textMetric.simplify(test);

console.log(textMetric.createMetrics(simpleText));
