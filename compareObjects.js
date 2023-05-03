var user1 = {
  name: "nerd",
  org: "dev",
  method: function () {
    console.log(this.name);
  },
};
var user2 = {
  name: "nerd",
  method: function () {
    console.log(this.name);
  },
};
var eq = user1 == user2;
console.log("eq", eq); // gives false

// works with simple objects withoyr methods and ORDER of properties is important
var eq1 = JSON.stringify(user1) === JSON.stringify(user2);
console.log("eq1", eq1); // gives true

//DEEP comparing from https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
