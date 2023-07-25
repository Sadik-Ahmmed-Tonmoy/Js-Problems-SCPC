function findMostFrequentElement(arr) {
  
  const frequencyDict = {};

  arr.forEach((element) => {
    if (frequencyDict[element]) {
      frequencyDict[element]++;
    } else {
      frequencyDict[element] = 1;
    }
  });

  let mostFrequentElement;
  let highestFrequency = 0;

  for (const element in frequencyDict) {
    if (frequencyDict[element] > highestFrequency) {
      highestFrequency = frequencyDict[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}


const array = [1, 2, 3, 2, 4, 2, 3, 4, 5, 2];
const mostFrequent = findMostFrequentElement(array);
console.log(mostFrequent); 
