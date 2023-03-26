var lengthOfLongestSubstring = function (s) {
  let number = 0;
  const length = s.length;
  if (length === 1) return 1;

  for (let i = 0; i < length; i++) {
    let subString = "";
    for (let j = i; j < length; j++) {
      if (!subString.includes(s[j])) {
        subString += s[j];
        if (number < subString.length) {
          number = subString.length;
        }
      } else {
        if (number < subString.length) {
          number = subString.length;
        }
        subString = "";
        break;
      }
    }
  }
  console.log(number);
  return number;
};
console.time("hi");
lengthOfLongestSubstring("aab");
console.timeEnd("hi");
