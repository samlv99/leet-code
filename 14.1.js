function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let strCommon = getShortestString(strs);

  for (let i = 0; i < strCommon.length; i++) {
    let prefix = strCommon.slice(0, i + 1);
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].slice(0, i + 1) !== prefix) {
        return prefix.slice(0, -1);
      }
    }
  }

  return prefix;
}

function getShortestString(strs) {
  return strs.reduce((firstStr, secondStr) => {
    return firstStr.length > secondStr.length ? secondStr : firstStr;
  });
}

// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["cir", "car"]));
// console.log(longestCommonPrefix(["reflower", "flow", "flight"]));

// try2

function longestCommonPrefix2(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    let j = 0;

    while (
      j < prefix.length &&
      j < strs[i].length &&
      prefix[j] === strs[i][j]
    ) {
      j++;
    }

    if (j === 0) return "";

    prefix = prefix.slice(0, j);
  }

  return prefix;
}

// console.log(longestCommonPrefix2(["dog", "racecar", "car"]));
console.log(longestCommonPrefix2(["flower", "flight", "flow"]));
// console.log(longestCommonPrefix2(["cir", "car"]));
// console.log(longestCommonPrefix2(["reflower", "flow", "flight"]));
