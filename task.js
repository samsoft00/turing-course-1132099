// Spiral traverse

function main(array, targetSum) {
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];

      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }

  return [];
}

function threeSq(array, targetSum) {
  const triplet = [];
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplet.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplet;
}

// let array = [
//   [1, 2, 3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10, 9, 8, 7],
// ];

// const array = [3, 5, -4, 8, 11, 1, -1, 6];
// const targetSum = 1;

const array1 = [12, 3, 1, 2, -6, 5, -8, 6],
  targetSum1 = 0;

// const result = main(array, targetSum);
const result1 = threeSq(array1, targetSum1);
console.log(result1);
