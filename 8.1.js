function myAtoi(s) {
  // let i = 0;
  // let sign = 1;
  // let result = 0;

  // // Remove white spaces
  // while (s[i] === " ") {
  //   i++;
  // }

  // // Check for sign
  // if (s[i] === "-" || s[i] === "+") {
  //   sign = s[i] === "-" ? -1 : 1;
  //   i++;
  // }
  // console.log('i', i);

  // // Convert number
  // while (i < s.length && s[i] >= "0" && s[i] <= "9") {
  //   result = result * 10 + (s[i] - "0");
  //   console.log("result", result);
  //   i++;
  // }

  // // Apply sign and check for overflow
  // result = sign * result;
  // // console.log('result', result);
  // if (result > 2 ** 31 - 1) {
  //   return 2 ** 31 - 1;
  // } else if (result < -(2 ** 31)) {
  //   return -(2 ** 31);
  // } else {
  //   return result;
  // }
  const limit = Math.pow(2, 31);
  let sign = 1;
  let i = 0;
  let result = 0;

  while (s[i] == " ") {
    i++;
  }

  if (s[i] == "+" || s[i] == "-") {
    sign = s[i] == "+" ? 1 : -1;
    i++;
  }

  while (i < s.length && 48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57) {
    console.log("char", s.charCodeAt(i));
    result = result * 10 + (s.charCodeAt(i) - 48);
    console.log("result", result);
    i++;
  }
  console.log(result);

  result *= sign;

  if (result > limit - 1) {
    return limit - 1;
  } else if (result < -limit) {
    return -limit;
  } else {
    return result;
  }
}

console.log(myAtoi("4193 with words"));
