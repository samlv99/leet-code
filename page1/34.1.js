function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];

  if (nums.length == 1 && nums[0] === target) return [0, 0];

  while (left < right) {
    if (nums[left] === target && nums[right] === target) return [left, right];

    while (left < right && nums[left] !== target) {
      left++;
    }
    if (nums[left] === target) {
      result.push(left);
    }

    while (left < right && nums[right] !== target) {
      right--;
    }
    if (nums[right] === target) {
      result.push(right);
    }
  }

  return result.length > 0 ? result : [-1, -1];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 10], 8));
console.log(searchRange([1, 3], 1));
