/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    
  let low = 0
  let high = nums.length -1
  
  if (target < nums[0] || target > nums[nums.length-1]) return -1
  
  while (low <= high) {
      
      //console.log('low: ', low)
      //console.log('high: ', high)
      let mid = Math.floor((low + high)/2)
      const num = nums[mid]
          
      if (num > target) high = mid - 1
      else if (num < target) low = mid + 1
      else if (num === target) return mid
  }
  
  return -1
  
  
};