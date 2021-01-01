/**
 * space => o(n)
 * 4 * recFactorial(3)
 * 4 * 3 * recFactorial(2)
 * 4 * 3 * 2 * recFactorial(1)
 * 4 * 3 * 2 * 1
 * => 24
 */
const recFactorial = function (x) {
  if (x <= 1) return 1;
  return x * recFactorial(x - 1);
};

/**
 * space => o(1)
 * 1 * 4 = 4
 * 4 * 3 = 12
 * 12 * 2 = 24
 * 24 * 1 = 24
 */
const tailFactorial = function (x, totalSoFar = 1) {
  if (x === 0) return totalSoFar;
  return tailRecursion(x - 1, totalSoFar * x);
};
