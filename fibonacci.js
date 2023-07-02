let array = [];
function fibonacciViaLoop(n) {
  for (let i = 0; i < n; i++) {
    const sum = 0;
    if (array.length === 0) {
      array.push(sum);
    } else if (array.length === 1) {
      array.push(array[array.length - 1] + 1);
    } else {
      array.push(array[array.length - 2] + array[array.length - 1]);
    }
  }

  console.log(array);

  return array[array.length - 1];
}

console.log(fibonacciViaLoop(10));
