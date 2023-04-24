// PAYPALISHIRING
// --> PAHNAPLSIIGYIR

/* P   A   H   N
   A P L S I I G
   Y   I   R */
// numRows = 3;

function convert(originalString, numRows) {
  const newRows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;

  for (const char of originalString) {
    newRows[currentRow] += char;

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
    console.log("newRows", newRows);
  }

  return newRows.join("");
}

console.log(convert("PAYPALISHIRING", 4));
// hehe :'(
