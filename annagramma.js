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

console.log(annagrama("annagramMa", "aNNagramma"));

const buildCharObject = (str) => {
  const charObj = {};
  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    // if the object has already a key value pair
    // equal to the value being looped over,
    // increase the value by 1, otherwise add
    // the letter being looped over as key and 1 as its value
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
};

const anagram = (strA, strB) => {
  // build the object that holds strA data
  const aCharObject = buildCharObject(strA);
  // build the object that holds strB data
  const bCharObject = buildCharObject(strB);

  // compare number of keys in the two objects
  // (anagrams must have the same number of letters)
  if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
    return false;
  }
  // if both objects have the same number of keys
  // we can be sure that at least both strings
  // have the same number of characters
  // Now we can compare the two objects to see if both
  // have the same letters in the same amount
  for (let char in aCharObject) {
    if (aCharObject[char] !== bCharObject[char]) {
      return false;
    }
  }
  // if both the above checks succeed,
  // you have an anagram: return true
  return true;
};

console.log(anagram("ann1agraMMA", "aNNagraMMA1"));
