const checkPrimLib = require("./checkPrimitivesLibrary");

module.exports = {
  convertToJson
};

let temporaryArray = [];

function convertToJson(unconvertedData) {
  // console.log(6, unconvertedData);

  unconvertedData.forEach((element, index) => {
    if (checkPrimLib.checkOnNumber(element)) {
      temporaryArray.push(element);
    }
    if (checkPrimLib.checkOnString(element)) {
      analyzeString(element);
    }
  });

  console.log(38, temporaryArray);
}

function analyzeString(item) {
  let unknown = item.replace(/'/g, "");
  temporaryArray.push(unknown);
  // console.log(JSON.parse(unknown));

  //TODO find empty objects
}
