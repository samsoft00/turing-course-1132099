/**
 * Remove minimum parenthesis
 * https://repl.it/@ZhangMYihua/remove-minimum-parentheses#index.js
 */

const string1 = "(ab(cd)";

const removeMimParenthesis = function (s) {
  const res = s.split(""); // [(,a, b, (, c, d, )]
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      stack.push(i);
    } else if (res[i] === ")" && stack.length) {
      stack.pop();
    } else if (res[i] === ")") {
      res[i] = "";
    }
  }

  while (stack.length) {
    const curIdx = stack.pop();
    res[curIdx] = "";
  }
  return res.join("");
};

console.log(removeMimParenthesis(string1));
