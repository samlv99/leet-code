function letterCombinations(digits) {
  let result = [];
  let mapPhoneNumber = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);
  console.log(mapPhoneNumber.get(digits[0]));
  if (digits.length === 1)
    return combinations(mapPhoneNumber.get(digits[0]), "");

  for (let i = 0; i < digits.length - 1; i++) {
    let j = i + 1;

    while (j < digits.length) {
      combinations(
        mapPhoneNumber.get(digits[i]),
        mapPhoneNumber.get(digits[j])
      ).map((x) => result.push(x));
      j++;
    }
  }

  return result;
}

function combinations(str1, str2) {
  let result = [];
  if (str1.length === 0) {
    for (let i = 0; i < str2.length; i++) {
      result.push(str2[i]);
    }
  } else if (str2.length === 0) {
    for (let i = 0; i < str1.length; i++) {
      result.push(str1[i]);
    }
  } else {
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        result.push(str1[i] + str2[j]);
      }
    }
  }

  return result;
}

// console.log(letterCombinations("234"));
console.log(letterCombinations("2"));
