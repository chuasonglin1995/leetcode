/**
 * @param {number[]} nums
 * @return {number}
 */
 var deleteAndEarn = function(nums) {
    
  // create a point counter for each number
  const pointsMap = new Map()
  for (let num of nums) {
      pointsMap[num] = pointsMap[num] + num || num
  }
  
  // sort and unique the nums
  nums.sort((a, b) => (a-b))
  nums = [... new Set(nums)]
  
  // track the points
  // [1, 3, 4, 5, 6, 7]
  let earn1 = 0
  let earn2 = 0
  for (let i=0; i<nums.length; i++) {

      if (nums[i] !== nums[i-1]+1) {
          let tempPoints = Math.max(pointsMap[nums[i]] + earn1, pointsMap[nums[i]] + earn2)
          earn1 = earn2
          earn2 = tempPoints
      } 
      
      else {
          let tempPoints = Math.max(pointsMap[nums[i]] + earn1, earn2)
          earn1 = earn2
          earn2 = tempPoints
      }
  }
  
  return Math.max(earn1, earn2)
  
};