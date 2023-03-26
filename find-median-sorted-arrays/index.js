// var findMedianSortedArrays = function (nums1, nums2) {
//   let mergeArray = nums1.concat(nums2);
//   mergeArray.sort((a, b) => a - b);
//   console.log(mergeArray);
//   const length = mergeArray.length;
//   if (length == 1) return mergeArray[0];
//   if (length % 2 === 0) {
//     return (mergeArray[length / 2] + mergeArray[length / 2 + 1]) / 2;
//   } else {
//     console.log(Math.floor(length / 2));
//     return mergeArray[Math.floor(length / 2)];
//   }
// };

findMedianSortedArrays([], [1, 2, 3, 4, 5]);

function findMedianSortedArrays(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  if (m > n) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let low = 0;
  let high = m;
  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
    const maxLeftX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const minRightX =
      partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];
    const maxLeftY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    const minRightY =
      partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
}
