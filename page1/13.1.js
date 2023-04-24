// function romanToInt(s) {
//   const romanMap = new Map([
//     [1000, "M"],
//     [900, "CM"],
//     [500, "D"],
//     [400, "CD"],
//     [100, "C"],
//     [90, "XC"],
//     [50, "L"],
//     [40, "XL"],
//     [10, "X"],
//     [9, "IX"],
//     [5, "V"],
//     [4, "IV"],
//     [1, "I"],
//   ]);

//   let num = 0;
//   while (s.length > 0) {
//     for (const [value, symbol] of romanMap) {
//       if (symbol === s.slice(0, 2)) {
//         num += value;
//         s = s.slice(symbol.length);
//         if (s[0] !== symbol) {
//           romanMap.delete(value);
//         }
//       } else if (symbol === s.slice(0, 1)) {
//         num += value;
//         s = s.slice(symbol.length);
//         if (s[0] !== symbol) {
//           romanMap.delete(value);
//         }
//       }
//     }
//   }

//   return num;
// }

function romanToInt(s) {
  const romanMap = new Map([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ]);

  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const next = s[i + 1];

    if (next && romanMap.get(next) > romanMap.get(curr)) {
      num += romanMap.get(next) - romanMap.get(curr);
      i++;
    } else {
      num += romanMap.get(curr);
    }
  }

  return num;
}

console.log(romanToInt("MMMXLV"));
