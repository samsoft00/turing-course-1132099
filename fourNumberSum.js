/**
 * Four Number Sum
 */
const fourNumberSum = function (array, target) {
  const response = [];
  const hashTable = {};
  for (let i = 0; i < array.length - 1; i++) {
    //
    for (let j = i + 1; j < array.length; j++) {
      let currentVal = array[i] + array[j];
      let difference = target - currentVal;

      if (difference in hashTable) {
        for (const pair of hashTable[difference]) {
          response.push(pair.concat(array[i], array[j]));
        }
      }
    }

    for (let k = 0; k < i; k++) {
      const currenSum = array[k] + array[i];
      if (!(currenSum in hashTable)) {
        hashTable[currenSum] = [[array[k], array[i]]];
      } else {
        hashTable[currenSum].push([array[k], array[i]]);
      }
    }
  }
  return response;
};

let array = [7, 6, 4, -1, 1, 2];
let target = 16;

console.log(fourNumberSum(array, target));
