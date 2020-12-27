/**
 * Valid Palindrome.
 * @param {*} s String
 */
var validPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }
  return true;
};

var validSubPalidrome = function (s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

/**
 * Almost a Palindrome.
 */
var almostPalidrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  //edge cases
  if (s.length < 1) return true;

  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        validSubPalidrome(s, left + 1, right) ||
        validSubPalidrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

const string = "A man, a plan, a canal: Panama";
console.log(almostPalidrome("abccba"));
