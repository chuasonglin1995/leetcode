/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
  let low = 0
  let high = nums.length -1
  
  while (low<=high) {
      
      let mid = Math.floor((low+high)/2)
      let num = nums[mid]
      
      if (num === target) return mid
      else if (num > target) high = mid -1
      else if (num < target) low = mid +1
  }
  
  return low
  
};