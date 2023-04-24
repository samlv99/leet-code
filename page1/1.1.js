function twoSum(nums, target) {
  const length = nums.length;
  let visitedNum = new Map();

  for (let i = 0; i < length; i++) {
    let numberNeed = target - nums[i];
    let indexOfNumberNeed = visitedNum.get(numberNeed);
    if (indexOfNumberNeed >= 0) {
      return [i, indexOfNumberNeed];
    }
    visitedNum.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
