/**
 * Check for valid parenthesis
 * https://repl.it/@ZhangMYihua/valid-parentheses#main.js
 * https://leetcode.com/problems/valid-parentheses/
 */

const parens = {
  "[": "]",
  "{": "}",
  "(": ")",
};

const s = "()[]{}";
// "{([]"
const validParenthesis = function (s) {
  if (s.length === 0) return true;

  let stack = [];

  for (let l = 0; l < s.length; l++) {
    const val = s[l];
    if (parens[val]) {
      stack.push(val);
    } else {
      const leftBracket = stack.pop(); // [
      const correntBac = parens[leftBracket];
      if (val !== correntBac) return false;
    }
  }

  return stack.length === 0;
};

console.log(validParenthesis(s));
