function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      continue;
    }

    nums[count] = nums[i];
    count++;
  }
  console.log("nums", nums);

  return count;
}

console.log(removeDuplicates([1, 1, 2]));
