//JS is weird:
const obj = {
  name: "Billy",
  sing: function () {
    console.log("a", this); // in this case, it's a method on an object.
    var anotherFunc = () => {
      console.log("b", this);
    };
    return anotherFunc.bind(this);
  },
};

obj.sing();
