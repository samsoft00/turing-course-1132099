/**
 * Check if sub array is in array.
 */

let isValidSubsequence = function (array, subArray) {
  let arrIdx = 0;
  let sunArrIdx = 0;

  while (arrIdx < array.length && sunArrIdx < subArray.length) {
    if (array[arrIdx] === subArray[sunArrIdx]) sunArrIdx++;
    arrIdx++;
  }

  return sunArrIdx === subArray.length;
};

console.log(isValidSubsequence([2, 4, 3, 10], [9, 10]));
