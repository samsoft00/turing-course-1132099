/**
 * Strings - Question #5
 * Longest Substring
 * Without Repeating Characters (Medium)
 */

let string = "abc";
// use hashtable

const longestString = function (s) {
  if (s.length <= 1) return s.length;
  let longest = 0;

  for (let left = 0; left < s.length; left++) {
    let seenChars = {},
      currentLength = 0;

    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];
      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }
  return longest;
};

const longestStringOptimize = function (s) {
  if (s.length <= 1) return s.length;
  let longest = 0,
    seenChars = new Map(),
    left = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    const previousChar = seenChars.get(currentChar);
    if (previousChar >= left) {
      left = previousChar + 1;
    }

    seenChars.set(currentChar, right);
    longest = Math.max(longest, right - left + 1);
  }
  console.log(seenChars);
  return longest;
};

console.log(longestStringOptimize(string));
