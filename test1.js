/**
 * Codility Toptal question
 * @param {*} A Names
 * @param {*} B Phones
 * @param {*} P partial name
 */
const test1 = function (A, B, P) {
  let response = "NO CONTACT";
  const contactNames = A;
  const contactPhones = B;
  const partialPhone = P;
  const searchResults = {};

  for (let i = 0; i < contactPhones.length; i++) {
    const phone = contactPhones[i];
    if (phone.includes(partialPhone)) {
      searchResults[phone] = i;
    }
  }

  const resultKeys = Object.keys(searchResults);

  if (resultKeys.length === 0) {
    return response;
  } else if (resultKeys.length === 1) {
    return contactNames[searchResults[resultKeys[0]]];
  } else {
    const names = [];

    for (let j = 0; j < resultKeys.length; j++) {
      const indx = searchResults[resultKeys[j]];
      names.push(contactNames[indx]);
    }

    names.sort((a, b) => a.localeCompare(b));
    return names[0];
  }
};

// const A = ["pim", "pom"];
// const B = ["999999999", "777888999"];
// const P = "88999";

const A = ["sander", "amy", "ann", "michael"];
const B = ["123456789", "234567890", "789123456", "123123123"];
const P = "1";
console.log(test1(A, B, P));
