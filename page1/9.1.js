// function isPalindrome(x) {
//   const stringConvertFromX = String(x);
//   const length = stringConvertFromX.length;
//   if (length == 2) {
//     if (stringConvertFromX[0] == stringConvertFromX[1]) {
//       return true;
//     } else return false;
//   }

//   if (length % 2 == 0) {
//     let privotLeft = length / 2 - 1;
//     let privotRight = length / 2;
//     while (
//       privotLeft >= 0 &&
//       privotRight < length - 1 &&
//       stringConvertFromX[privotLeft] == stringConvertFromX[privotRight]
//     ) {
//       privotLeft--;
//       privotRight++;
//     }

//     if (privotLeft == 0 && privotRight == length - 1) {
//       return true;
//     } else return false;
//   } else {
//     let privotLeft = Math.floor(length / 2) - 1;
//     let privotRight = Math.floor(length / 2) + 1;

//     while (
//       privotLeft >= 0 &&
//       privotRight < length - 1 &&
//       stringConvertFromX[privotLeft] == stringConvertFromX[privotRight]
//     ) {
//       privotLeft--;
//       privotRight++;
//     }

//     if (privotLeft == 0 && privotRight == length - 1) {
//       return true;
//     } else return false;
//   }
// }

function isPalindrome(x) {
  if (x < 0) return false;

  let reserved = 0;
  const originalNumber = x;

  while (x) {
    reserved = reserved * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reserved == originalNumber ? true : false;
}

console.log(isPalindrome(1215));
