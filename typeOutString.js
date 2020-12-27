/**
 *
 */

// const backspace compare
const backSpaceComp = function (s) {
  const buildArray = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element !== "#") {
      buildArray.push(element);
    } else {
      buildArray.pop();
    }
  }
  return buildArray;
};

const typeOutString = function (s, t) {
  const finalS = backSpaceComp(s);
  const finalT = backSpaceComp(t);

  if (finalS.length !== finalT.length) return false;

  for (let l = 0; l < finalS.length; l++) {
    const element = finalS[l];
    if (element !== finalT[l]) return false;
  }

  return true;
};

// Optimized using pointer
const optimizedTypeOutString = function (s, t) {
  let p1 = s.length - 1,
    p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === "#" || t[p2] === "#") {
      if (s[p1] === "#") {
        let backcount = 2;
        while (backcount > 0) {
          p1--;
          backcount--;

          if (s[p1] === "#") {
            backcount = +2;
          }
        }
      }
      if (t[p2] === "#") {
        let backcount = 2;
        while (backcount > 0) {
          p2--;
          backcount--;

          if (t[p2] === "#") {
            backcount = +2;
          }
        }
      }
    } else {
      if (s[p1] !== t[p2]) return false;

      p1--;
      p2--;
    }
  }
  return true;
};

const s = "ab#z";
const t = "az#z";

console.log(optimizedTypeOutString(s, t));
