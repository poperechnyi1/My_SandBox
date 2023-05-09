var o = {
  a: 2,
  m: function () {
    return this.a + 1;
  },
};

// console.log(o.m());

var p = Object.create(o);
// console.log(p.a);

p.a = 12;

// console.log(p.a);
// console.log(p.m());

// console.log(Object.getPrototypeOf(p));

function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function (v) {
    this.vertexes.push(v);
  },

  getVertexes: function () {
    return this.vertexes;
  },
};

var g = new Graph();

g.addVertex(1);
// console.log(g.getVertexes());

//=====================================================
var a = { a: 1 };
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (унаследовано)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null
console.log(c);

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, т.к. 'd' не наследуется от Object.prototype

function counterFn() {
  var count = 0;

  return function () {
    return ++count;
  };
}

const counter = counterFn();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter());
