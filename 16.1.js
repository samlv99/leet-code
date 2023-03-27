function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);

  let result = 0;
  let arrNeed = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let tar = target - nums[i];
      let curr = nums[left] + nums[right];
      if (result > tar - curr) {
        result = tar - curr;
        arrNeed.push([result, nums[left], nums[right]]);
      }
      result = Math.min(result, tar - curr);
      left++;
      right--;
    }
  }
  result = sum(arrNeed[arrNeed.length - 1]);
  return result;
}

function sum(arr) {
  return arr.reduce((first, second) => {
    return first + second;
  }, 0);
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
