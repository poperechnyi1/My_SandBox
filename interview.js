// Task 1
let a = [{ a: 1 }, { b: 2 }, { c: 3, d: 4 }];

let c = {};
Object.assign(c, ...a);
// console.log(c);

function initCounter() {
  let counter = 0;
  return function () {
    return counter++;
  };
}

let counter = initCounter();

// console.log(counter()); // output: 0
// console.log(counter()); // output: 1
// console.log(counter()); // output: 2

function someFunciton(a) {
  a.then(b.then(c.then((k) => 10)));
}

let arrMinMax = [1, 2, 4, 5, 6, 7, 8, 9, -1, 0, 666];

let min = arrMinMax[0];
let max = arrMinMax[0];

arrMinMax.forEach((element) => {
  if (element < min) {
    min = element;
  }
  if (element > max) {
    max = element;
  }
});

console.log("Min element", min);
console.log("Max element", max);

// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const people = [
  {
    name: "Alex",
    city: "Fucking moscow",
  },
  {
    name: "Ivan",
    city: "Fucking moscow",
  },
  {
    name: "Joe",
    city: "New York",
  },
  {
    name: "Johan",
    city: "Berlin",
  },
  {
    name: "Johan",
    city: "Berlin",
  },
  {
    name: "Doom Guy",
    city: "Hell",
  },
];

const groupByCity = (array) => {
  let result = {};

  for (let { city, name } of array) {
    if (!result[city]) {
      result[city] = name;
    } else if (Array.isArray(result[city])) {
      result[city].push(name);
    } else {
      result[city] = [result[city], name];
    }
  }

  return result;
};

// console.log(77, groupByCity(people));

// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/

const array1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [
  [1, 4],
  [4, 5],
]; // [[1, 5]]
const array3 = [
  [11, 12],
  [2, 3],
  [5, 7],
  [1, 4],
  [8, 10],
  [6, 8],
]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
  let mergeIdntervals = [];
  let mergedIntervalsIndexes = new Set();
  console.log(121, intervals);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (mergedIntervalsIndexes.has(i)) {
      continue;
    }
    let first = intervals[i];
    for (let j = i + 1; j < intervals.length; j++) {
      let second = intervals[j];
      console.log(129, first);
      console.log(130, second);
      if (
        first[1] >= second[0] &&
        first[0] < second[0] &&
        first[1] < second[1]
      ) {
        mergedIntervalsIndexes.add(i);
        mergedIntervalsIndexes.add(j);
        mergeIdntervals.push([first[0], second[1]]);
      } else if (
        // повне входження першого елементу в другий
        first[0] > second[0] &&
        first[0] < second[1] &&
        first[1] > second[0] &&
        first[1] < second[1]
      ) {
        mergedIntervalsIndexes.add(i);
        mergedIntervalsIndexes.add(j);
        mergeIdntervals.push(second);
      } else if (
        // пересічення
        first[0] < second[0] &&
        first[0] < second[1] &&
        first[1] > second[0] &&
        first[1] < second[1]
      ) {
        mergedIntervalsIndexes.add(i);
        mergedIntervalsIndexes.add(j);
        mergeIdntervals.push(first);
      }
    }
  }

  for (let i = 0; i < intervals.length; i++) {
    if (mergedIntervalsIndexes.has(i)) {
      continue;
    } else {
      mergeIdntervals.push(intervals[i]);
    }
  }

  if (mergedIntervalsIndexes.size) {
    console.log("Recurtion");
    console.log(169, mergedIntervalsIndexes);
    return merge(mergeIdntervals);
  }

  return intervals;
}

console.log("Merged intervals", merge(array1));

console.clear();

// #1 --------------------------------------

// const inputData = [
//   { id: 1, name: "Item 1" },
//   { id: 2, name: "Item 2" },
//   { id: 4, name: "Item 4" },
//   { id: 7, name: "Item 7" },
// ];

// function normalize(data) {
//   return data;
// }

// #2 --------------------------------------

// const user = {};
// const users = [];

// function createUser (name) {
//   user.name = name;
//   console.log('New user: ', user.name);
//   users.push(user);
// }

// createUser('Homer');
// createUser('Bart');

// console.log('All users:');
// console.log(users);

// #3 --------------------------------------

// (function () {
//   f();
//   f = function () {
//     console.log(1);
//   };
// })();

// function f() {
//   console.log(2);
// }

// f();

// #4 --------------------------------------

// var x = 100;

// test();

// function test() {
//   if (false) {
//     var x = 199;
//   }
//   console.log(x);
// }

// #5 --------------------------------------

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
// }

// #6 --------------------------------------

// (function () {
//   console.log(1);
//   setTimeout(() => { console.log(2); }, 1000);
//   setTimeout(() => { console.log(3); }, 0);
//   console.log(4);
//   Promise.resolve().then(() => console.log(5));
// })();
// 1 4 5 3 2
// ------------------------------------------

// console.log("1");

// setTimeout(() => {
//   console.log("2");

//   Promise.resolve().then(() => {
//     console.log("3");
//   });
//  setTimeout(() => {
//    console.log("6");
// }, 0)
// }, 0);

// setTimeout(() => {
//   console.log("4");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("5");
// });
// 1 5 2 3 4 6
// #7 --------------------------------------

// it('should be false', () => {
//   expect({ prop: 'str' } === { prop: 'str' }).toBe(false);
//   expect([1, 2, 3] === [1, 2, 3]).toBe(false);
// });

// #8 --------------------------------------

// class Test {
//   constructor(str) {
//     this.prop = str;
//   }
//   print() {
//     console.log(this.prop);
//   }
// }

// const foo = new Test('bingo!');
// setTimeout(foo.print, 2000);

// #9 --------------------------------------

// const test = {
//   prop: 'Prop Value',
//   print: () => {
//     console.log(this.prop);
//   }
// }

// test.print();

// #11 --------------------------------------

// const parent = { prop: 'I am parent object' };
// const child = createChild(parent);

// function createChild(parent) {
//   ...
// }

// it('should check that child prototype = parent object', () => {
//   expect(Object.getPrototypeOf(child)).toEqual(parent);
// });

// #13 --------------------------------------

// blue    is  sky The      -> The sky is blue

// const input = 'blue    is  sky The     '

// function convert(input) {
//   ...
// }

// #14 --------------------------------------

// const input = {
//   a: {
//     b: {
//       t: 2,
//       c: {
//         d: {
//           f: 10,
//         }
//       }
//     },
//     z: 20
//   },
//   d: 24
// }
// const output = {
//   'a.b.t': 2,
//   'a.b.c.d.f': 10,
//   'd': 24,
//   'a.z': 20
// }

// function flatten(input) {
//   ...
// }

// #14 --------------------------------------

// const lettersArr = ['A', 'N', 'F', 'Y', 'U', 'K']

// function splitLetters(letters) {
//   // ... Add your code
//   return letters
// }

// it('should return splitted letters', () => {
//   expect(splitLetters(lettersArr)).toEqual(
//     {
//       vowels: ['A', 'Y', 'U'],
//       consonants: ['N', 'F', 'K']
//     }
//   );
// });

// #14 --------------------------------------

// [[[1, 2]], 3, [4, 5]] --> [1, 2, 3, 4, 5]

// function flatten(input) {
//   ...
// }

// it('should ...', ...);

// #14 --------------------------------------

// const lettersArr = ['A', 'N', 'F', 'Y', 'U', 'K']

// function splitLetters(letters) {
//   // ... Add your code
//   return letters
// }

// it('should return splitted letters', () => {
//   expect(splitLetters(lettersArr)).toEqual(
//     {
//       vowels: ['A', 'Y', 'U'],
//       consonants: ['N', 'F', 'K']
//     }
//   );
// });

// #15 --------------------------------------
// const array = [1, 10, 20, ...]
// function sum(array) {
//  ...
// }

// Create recursive function to calculate Fibonnaci numbers

// fibonacci(0) -> 0
// fibonacci(1) -> 1
// fibonacci(2) -> 1
// fibonacci(10) -> 55

// console.clear();

// async  function wait() {
//   setTimeout(()=>{
//     console.log('Just log')
//   }, 0)
// }

// async function fibonacci(n) {
//   console.log('fibonacci check',n)
//   if(n < 0 ) {
//     return 'Please pass positive'
//   }
//   if(n === 0) {
//     return 0
//   }

//   if(n === 1) {
//     return 1
//   }

//   return fibonacci(n-1) + fibonacci(n-2)

// }

// console.log(fibonacci(10));

// CREATE TABLE employees (
//   id INT,
//   first_name VARCHAR(255),
//   last_name VARCHAR(255),
//   gender ENUM('male', 'female', 'other'),
//   salary INT
// );

// INSERT INTO employees (id, first_name, last_name, gender, salary) VALUES (1, 'John', 'Doe', 'male', 50000);
// INSERT INTO employees (id, first_name, last_name, gender, salary) VALUES (2, 'Jane', 'Smith', 'female', 60000);
// INSERT INTO employees (id, first_name, last_name, gender, salary) VALUES (3, 'David', 'Johnson', 'male', 55000);
// INSERT INTO employees (id, first_name, last_name, gender, salary) VALUES (4, 'Emily', 'Williams', 'female', 65000);
// INSERT INTO employees (id, first_name, last_name, gender, salary) VALUES (5, 'Michael', 'Brown', 'male', 70000);
// INSERT INTO employees (id, first_name, last_name, gender, salary) VALUES (6, 'Sophia', 'Jones', 'female', 55000);
// INSERT INTO employees (id, first_name, last_name, gender, salary) VALUES (7, 'Daniel', 'Davis', 'male', 60000);
// INSERT INTO employees (id, first_name, last_name, gender, salary) VALUES (8, 'Olivia', 'Miller', 'female', 55000);
// INSERT INTO employees (id, first_name, last_name, gender, salary) VALUES (9, 'Matthew', 'Wilson', 'male', 65000);
// INSERT INTO employees (id, first_name, last_name, gender, salary) VALUES (10, 'Ava', 'Anderson', 'female', 70000);
