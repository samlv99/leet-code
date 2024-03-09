function twoSum(nums, target) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const numNeed = target - nums[i];
    if (numsMap.has(numNeed)) {
      return [i, numsMap.get(numNeed)];
    }
    numsMap.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
