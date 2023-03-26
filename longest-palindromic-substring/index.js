function isSubstringStillAPlindoment(originalString, left, right) {
  const isLeftInBound = left >= 0;
  const isRightInBound = right < originalString.length;
  const areLeftAndRightValueTheSame =
    originalString[left] == originalString[right];

  return isLeftInBound && isRightInBound && areLeftAndRightValueTheSame;
}

function getPalindrome(originalString, left, right) {
  while (isSubstringStillAPlindoment(originalString, left, right)) {
    left--;
    right++;
  }

  return originalString.substring(left + 1, right);
}

function getLongestStr(arr) {
  return arr.reduce((firstStr, secondStr) => {
    return firstStr.length > secondStr.length ? firstStr : secondStr;
  });
}

function longestPalindrome(originalString) {
  let result = "";

  for (let i = 0; i < originalString.length; i++) {
    const oddPalindromeString = getPalindrome(originalString, i, i);
    const evenPalindromeString = getPalindrome(originalString, i, i + 1);
    console.log('evenPalindromeString', evenPalindromeString);
    console.log('oddPalindromeString', oddPalindromeString);

    result = getLongestStr([result, oddPalindromeString, evenPalindromeString]);
  }

  return result;
}

// console.log(longestPalindrome("babad"));
console.log(longestPalindrome("bb"));
