//my own decision

function annagrama(string1, string2) {
  const amountOfLettersInEachString = new Map();
  const string1Lowercased = string1.toLowerCase();
  const string2Lowercased = string2.toLowerCase();

  for (let i = 0; i < string1Lowercased.length; i++) {
    let element = string1Lowercased[i];
    if (amountOfLettersInEachString.has(element)) {
      const counters = amountOfLettersInEachString.get(element);
      counters.str1++;
      amountOfLettersInEachString.set(element, counters);
    } else {
      amountOfLettersInEachString.set(element, { str1: 1, str2: 0 });
    }
  }

  for (let i = 0; i < string2Lowercased.length; i++) {
    let element = string2Lowercased[i];
    if (amountOfLettersInEachString.has(element)) {
      const counters = amountOfLettersInEachString.get(element);
      if (counters.str1 > counters.str2) {
        counters.str2++;
        amountOfLettersInEachString.set(element, counters);
      } else {
        console.log("It is no an annagramma");
        return false;
      }
    } else {
      console.log("It is no an annagramma");
      return false;
    }
  }

  const keys = amountOfLettersInEachString.keys();

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = amountOfLettersInEachString.get(key);
    if (value.str1 !== value.str2) {
      console.log("There is no annagramma");
      console.log(
        `Ammounts of letters ${key} are different! First string has ${value.str1} and second string has ${value.str2}`
      );

      return false;
    }
  }

  return true;
}

console.log(annagrama("annagramMa", "aNNag ramma"));
