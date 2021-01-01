/**
 *
 * @param {*} s array
 * @param {*} idx integer
 * [1, 2, 3, 4, 5, 6, 7], 2
 */
// const binarySearch = function (array, idx) {
//   array.sort((a, b) => a - b);

//   let leftIdx = 0;
//   let rightIdx = array.length - 1;

//   while (leftIdx <= rightIdx) {
//     let midIdx = Math.floor((leftIdx + rightIdx) / 2);
//     let findVal = array[midIdx];

//     if (findVal === idx) {
//       return midIdx;
//     } else if (findVal < idx) {
//       leftIdx = midIdx + 1;
//     } else {
//       rightIdx = midIdx - 1;
//     }
//   }
//   return -1;
// };

const binarySearch = function (array, leftIdx, rightIdx, idx) {
  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let findVal = array[midIdx];

    if (findVal === idx) {
      return midIdx;
    } else if (findVal < idx) {
      leftIdx = midIdx + 1;
    } else {
      rightIdx = midIdx - 1;
    }
  }
  return -1;
};

/**
 * Start and end of target in a sorted array.
 * [1, 3, 3, 5, 5, 5, 8, 9] t= 5
 */
const findStartEndTarget = function (array, target) {
  if (array.length === 0) return [-1, -1];

  let leftIdx = 0;
  let rightIdx = array.length - 1;

  const firstpos = binarySearch(array, leftIdx, rightIdx, target); // 3
  if (firstpos === -1) return [-1, -1];

  let startpos = firstpos;
  let endpos = firstpos;
  let temp1, temp2;

  while (startpos !== -1) {
    temp1 = startpos;
    startpos = binarySearch(array, 0, startpos - 1, target);
  }
  startpos = temp1;

  while (endpos !== -1) {
    temp2 = endpos;
    endpos = binarySearch(array, endpos + 1, array.length - 1, target);
  }
  endpos = temp2;

  return [startpos, endpos];
};

const array = [1, 3, 3, 5, 5, 5, 8, 9];
console.log(findStartEndTarget(array, 5));
