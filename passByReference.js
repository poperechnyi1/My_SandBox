const number = 100;
const string = "Jay";
let obj1 = {
  value: "a",
};
let obj2 = {
  value: "b",
};
let obj3 = obj2;

function change(number, string, obj1, obj2) {
  number = number * 10; //undefined
  string = "Pete"; // Pete
  obj1 = obj2; // ref on obj2
  obj2.value = "c"; // c
}

change(number, string, obj1, obj2);

//Guess the outputs here before you run the code:
console.log(number); //undefine
console.log(string); //Pete
console.log(obj1.value); // c
