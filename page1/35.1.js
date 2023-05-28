// function searchInsert(nums, target) {
//   if (nums[nums.length - 1] < target) return nums.length;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) return i;
//     if (nums[i] > target) return i;
//   }
// }

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

console.log(searchInsert([1, 3, 5, 7, 8], 5));
console.log(searchInsert([1, 3, 5, 6], 5));
