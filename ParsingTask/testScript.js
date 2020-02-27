const checkPrimitive = require("./checkPrimitivesLibrary");
const convertToJSON = require("./parsingData");

const labels = [
  '"":"tie","1":"nail polish"',
  {},
  [],
  "{Shoes:brown}",
  "-",
  "[{'Rings' : [Diamond, Gold]]}",
  '"{"T-Shirt":"white"}"',
  55,
  "\0",
  "\\0",
  '{"Pants":"black"}',
  "*",
  { Pants: ["Jeans", "Dress Pant", '{"Pants":"black"}'] },
  '{"Hat"}'
];

let report = [];

function parsingObject() {
  report = labels.filter(item => {
    if (checkPrimitive.checkOnString(item)) {
      return item;
    }

    if (checkPrimitive.checkOnNumber(item)) {
      return item;
    }

    if (checkPrimitive.checkOnNotEmptyObject(item)) {
      return item;
    }

    if (checkPrimitive.checkOnNotEmptyArray(item)) {
      return item;
    }
  });

  convertToJSON.convertToJson(report);
}

parsingObject();

// console.log(report);
// console.log("Length is ", report.length);

// [{ Tie : 1 },{Nail Polish: 1},{ Shoes: 1, type: brown },{ Rings: 2 , type: [Diamond , Gold] },{T-Shirt: 1, type: white},{Pants: 3, type: [ black, Jeans, Dress] },{Hats: 1},{ Total Distinct Labels: 7},{Total Non-Alpha: 5 }]
