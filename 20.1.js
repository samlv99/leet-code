function isValid(s) {
  const stack = [];
  const bracketMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (bracketMap.hasOwnProperty(char)) {
      stack.push(char);
    } else {
      let top = stack.pop();

      if (bracketMap[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid("(([]{}"));
console.log(isValid("([{[]}])"));
