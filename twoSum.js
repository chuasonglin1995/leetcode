/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
  const ht = new Map()
  
  for (let i=0; i<nums.length; i++) {
      
      const diff = target-nums[i] 
      
      if (ht[diff] >= 0) return [i, ht[diff]]

      ht[nums[i]] = i

  }
  
};