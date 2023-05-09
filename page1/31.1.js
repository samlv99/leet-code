function nextPermutation(nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let start = i + 1;
  let end = nums.length - 1;

  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }

  return nums;
}

console.log(nextPermutation([4, 3, 5, 1, 2]));
console.log(nextPermutation([1, 3, 2]));
console.log(nextPermutation([5, 4, 3]));
