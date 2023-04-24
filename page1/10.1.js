//this is my solution

/* function isMatch(s, p) {
  let newS = convertS(s);
  console.log("newS", newS);
  if (!p.includes(".") && !p.includes("*") && p.length !== s.length)
    return false;

  if (p.length < s.length && p[p.length - 1] != "*") return false;

  p = convertMatch(s, p);
  console.log("p", p);

  if (!p.includes(".") && p != s && s.length == p.length) {
    return false;
  }

  if (p.length > s.length) {
    p = p.slice(-s.length);
  }

  for (let index = 0; index < s.length; index++) {
    for (let i = index; i < p.length; i++) {
      if (p[i] === s[i - index] || p[i] === ".") {
        console.log(i, p.length - 1);
        if (i < p.length - 1) {
          continue;
        } else if (i == p.length - 1) {
          return true;
        } else return false;
      } else return false;
    }
  }
}

function convertMatch(s, p) {
  let paternNeed = "";
  for (let i = 0; i < p.length; i++) {
    if (p[i] == ".") {
      paternNeed += p[i];
      continue;
    } else if (p[i] == "*" && p[i + 1] == undefined) {
      let j = i;
      while (paternNeed.length < s.length) {
        paternNeed += p[i - 1];
        j++;
      }
    } else if (p[i] == "*" && p[i + 1] != undefined) {
      paternNeed += p[i - 1];
    } else {
      paternNeed += p[i];
      continue;
    }
  }
  return paternNeed;
}

function convertS(s) {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == newString[i - 1] && newString[i - 1] != "*") {
      newString += "*";
    } else newString += s[i];
  }

  return newString;
}
*/

const isMatch = function (s, p) {
  const dp = Array.from({ length: s.length + 1 }, () =>
    Array.from({ length: p.length + 1 }, () => false)
  );
  dp[0][0] = true;
  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === "*") dp[0][j] = dp[0][j - 2];
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      console.log("i", i);
      console.log("j", j);
      if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
        console.log(".");
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        console.log("*");
        dp[i][j] =
          dp[i][j - 2] ||
          ((s[i - 1] === p[j - 2] || p[j - 2] === ".") && dp[i - 1][j]); //i = 2, j = 3 dp[2][3] = dp[2][1] || ((s[1] === p[1] || p[1] === ".") && dp[1][3])
      } else {                                                                                       /*false || (false || false) && true */
        dp[i][j] = false;
      }
    }
  }
  console.log(dp);
  return dp[s.length][p.length];
};

// console.log(isMatch("aab", "a*a*b"));
// console.log(isMatch("ab", ".*a"));
// console.log(isMatch("aaa", "ab*ac*a"));
console.log(isMatch("abba", "ab*a*"));

//       a     b      *     a     c     *     a
// a   true  false  true  true  false  true  true
// a   true  false  true  true  false  true  true
// a   true  false  true  true  false  true  true
