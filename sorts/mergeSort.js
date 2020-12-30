/**
 * Merge Sort
 * [https://repl.it/@aneagoie/mergeSort#index.js]
 * @param {*} array
 */
const mergeSort = function (array) {
  if (array.length === 1) return array;

  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = function (left, right) {
  const results = [];
  let rightIdx = 0;
  let leftIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      results.push(left[leftIdx]);
      leftIdx++;
    } else {
      results.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return results.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
};

const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(mergeSort(array));
