/**
 * Find three largest Number
 */
const findThreeLargestNumber = function (array) {
  const threeLargestNum = Array(3).fill(null);

  for (const elem in array) {
    findThreeLargest(threeLargestNum, elem);
  }
  return threeLargestNum;
};

const findThreeLargest = function (threeLargestNum, elem) {
  if (threeLargestNum[2] === null || elem > threeLargestNum[2]) {
    swiftndUpdate(threeLargestNum, elem, 2);
  } else if (threeLargestNum[1] === null || elem > threeLargestNum[1]) {
    swiftndUpdate(threeLargestNum, elem, 2);
  } else if (threeLargestNum[0] === null || elem > threeLargestNum[0]) {
    swiftndUpdate(threeLargestNum, elem, 2);
  }
};

const swiftndUpdate = function (array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
};

const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
console.log(findThreeLargestNumber(array));

// [18, 141, 541]
