function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) counter++;
  }
  return counter;
}

console.log(findVowels("Rusni povna pizda"));
