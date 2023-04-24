function intToRoman(num) {
  const romanMap = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);

  let roman = "";

  for (const [value, symbol] of romanMap) {
    console.log(value, symbol);
    while (num >= value) {
      console.log("num", num);
      roman += symbol;
      num -= value;
    }
  }

  return roman;
}

console.log(intToRoman(3999));
