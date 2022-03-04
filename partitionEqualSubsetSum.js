/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    
  // find sum
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
  }
  
  // if sum is odd, reject
  if (sum%2 !==0) return false 
  
  
  const tgt = sum/2
  let subsums = new Set()
  
  for (let j=0; j<nums.length; j++) {
      
      let nextSubsums = new Set()
      nextSubsums.add(nums[j])
      
      subsums.forEach (function(value) {
          nextSubsums.add(value)
          nextSubsums.add(nums[j] + value)
          
      })
      
      if (subsums.has(tgt)) return true
      subsums = nextSubsums
  }
  

  return subsums.has(tgt)

};