// function reverse(x) {
//     const limit = 2 ** 31;
//     let convertToString = String(x);
//     let newString = '';

//     for (let i = convertToString.length - 1; i >= 0; i--) {
//         newString += convertToString[i];
//     }

//     if (newString[convertToString.length - 1] == '-') {
//         newString = newString.replace('-', '');
//         newString = -Number(newString)
//     }

//     if (newString < -limit || newString > limit + 1) {
//         return 0
//     }

//     return newString;
// }

function reverse(x) {
  const limit = Math.pow(2, 31);
  let sign = x > 0 ? 1 : -1;
  let revered = 0;
  x = Math.abs(x);

  while (x > 0) {
    revered = revered * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  revered = revered * sign;

  if (revered < -limit || revered > limit + 1) {
    return 0;
  }

  return revered;
}
