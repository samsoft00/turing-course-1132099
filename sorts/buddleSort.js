/**
 * Bubble sort
 */

const array = [90, 2, 4, 89, 100];

const swap = function (array, indx1, indx2) {
  let temp = array[indx1];
  array[indx1] = array[indx2];
  array[indx2] = temp;
};

const buddleSort = function (array) {
  if (!array.length) return [];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (let l = i + 1; l < length - 1; l++) {
      if (array[l] < array[i]) {
        swap(array, i, l);
      }
    }
  }
  return array;
};

console.log(buddleSort(array));
