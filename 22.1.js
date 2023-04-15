function generateParenthesis(n) {
  const result = [];

  generate(result, "", 0, 0, n);

  return result;
}

function generate(result, s, open, close, n) {
  if (open === n && close === n) {
    result.push(s);
    return;
  }

  if (open < n) {
    console.log("here 1");
    generate(result, s + "(", open + 1, close, n);
  }

  if (close < open) {
    console.log("here 2");
    generate(result, s + ")", open, close + 1, n);
  }
}

console.log(generateParenthesis(3));
