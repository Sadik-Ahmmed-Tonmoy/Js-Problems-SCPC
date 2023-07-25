function reverseString(inputString) {
  let reversedString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}



const inputString = "Hello, World!";
const reversed = reverseString(inputString);
console.log(reversed);
