function letterCombinations(digits) {
  if (!digits) return [];

  let result = [];
  const mapPhoneNumber = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const backtrack = (index, str) => {
    if (index === digits.length) {
      result.push(str);
      return;
    }

    for (const letter of mapPhoneNumber[digits[index]]) {
      backtrack(index + 1, str + letter);
    }
  };

  backtrack(0, "");

  return result;
}

console.log(letterCombinations("234"));
console.log(letterCombinations("2"));
