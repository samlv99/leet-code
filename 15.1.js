// tổng kết quả cần cộng bang khong
// output la mot bo 3 sao cho tong cua chung bang khong
// khong duoc chua bo ba trung lap

function threeSum(nums) {
  nums.sort((a, b) => a - b);

  let result = [];
  let obj = {};

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let target = -nums[i];
      let curr = nums[left] + nums[right];

      if (curr < target) {
        left++;
      } else if (curr > target) {
        right--;
      } else {
        let arr = [-target, nums[left], nums[right]];
        if (obj[arr] !== 1) {
          obj[arr] = 1;
          result.push(arr);
        }
        left++;
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
