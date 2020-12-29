/**
 * Selection Sort
 * https://repl.it/@aneagoie/selectionSort
 */

const selectionSort = function (array) {
  const arrlen = array.length;

  for (let i = 0; i < arrlen; i++) {
    let min = i; // 0
    let temp = array[i]; // 90

    for (let j = i + 1; j < arrlen; j++) {
      if (array[j] < array[min]) {
        min = j; // 3
      }
    }

    // swap
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
};

const array = [90, 2, 10, 4, 24, 89, 100];
console.log(selectionSort(array));
