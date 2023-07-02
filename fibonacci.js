function fibonacciViaLoop(n) {
  let array = [];
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

let array2 = [];
function fibonacciViaRecursion(n) {
  if (array2.length === 0 && n > 0) {
    array2.push(array2.length);
    return fibonacciViaRecursion(n - 1);
  }

  if (array2.length > 0 && array2.length === 1 && n > 0) {
    array2.push(array2.length);
    return fibonacciViaRecursion(n - 1);
  }

  if (array2.length > 0 && array2.length > 1 && n > 0) {
    array2.push(array2[array2.length - 2] + array2[array2.length - 1]);
    return fibonacciViaRecursion(n - 1);
  }

  console.log("!!!!", array2);

  return array2[array2.length - 1];
}

console.log(fibonacciViaRecursion(10));

const fibonacciCleanedFunction = (num) => {
  if (num < 2) {
    return num;
  }
  console.log(num);
  return fibonacciCleanedFunction(num - 1) + fibonacciCleanedFunction(num - 2);
};

console.log("Cleaned code", fibonacciCleanedFunction(9));
