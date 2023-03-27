function threeSumClosest(nums, target) {
  if (nums.length === 3) return sum(nums);
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let curr = nums[left] + nums[right] + nums[i];
      if (Math.abs(curr - target) < Math.abs(closestSum - target)) {
        closestSum = curr;
      } else if (curr < target) {
        left++;
      } else if (curr > target) {
        right--;
      } else {
        return curr;
      }
    }
  }

  return closestSum;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 1, 2], 3));
console.log(threeSumClosest([1, 1, 1, 1], 4));
