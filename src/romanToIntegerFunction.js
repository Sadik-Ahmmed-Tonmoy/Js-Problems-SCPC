function romanToInteger(romanNumeral) {
  const romanNumeralsMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let integerValue = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentNumeral = romanNumeral[i];
    const nextNumeral = romanNumeral[i + 1];

    if (romanNumeralsMap[currentNumeral] < romanNumeralsMap[nextNumeral]) {
      integerValue -= romanNumeralsMap[currentNumeral];
    } else {
      integerValue += romanNumeralsMap[currentNumeral];
    }
  }

  return integerValue;
}

console.log(romanToInteger('III')); 
console.log(romanToInteger('IX')); 
console.log(romanToInteger('XXI')); 
console.log(romanToInteger('XLII')); 
console.log(romanToInteger('CXCIX')); 
console.log(romanToInteger('MCMXCIX')); 
