function countVowelsAndConsonants(str) {
  const vowels = 'aeiouAEIOU';
  let vowelCount = (str.match(/[aeiouAEIOU]/g) || []).length;
  let consonantCount = (str.match(/[a-zA-Z]/g) || []).length - vowelCount;
  return { vowelCount, consonantCount };
}


const inputString = "Hello World";
const result = countVowelsAndConsonants(inputString);
console.log(result);

