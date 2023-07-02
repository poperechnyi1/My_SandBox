const stringExample = "Anna  annA ";

function palindrome(str) {
  const palindromeString = new String(str).split("").reverse().join("");
  return palindromeString.toLowerCase() === str.toLowerCase();
}

console.log("Palindrome ", palindrome(stringExample));
