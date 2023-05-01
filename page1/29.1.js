function divide(dividend, divisor) {
  const MAX = 2147483647;
  const MIN = -2147483648;

  if (dividend === 0) {
    return 0;
  }

  if (divisor === 1) {
    return dividend;
  }

  if (divisor === -1) {
    return dividend === MIN ? MAX : -dividend;
  }

  const sign =
    (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1;

  let result = 0;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  while (dividend >= divisor) {
    dividend -= divisor;
    result++;
  }

  return result * sign;
}

console.log(divide(-10, 3));
