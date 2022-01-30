/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    // sort the numbers O(lgN)
    nums.sort((a,b) => (a-b))
    
    
    // [-4, -1, -1, 0, 1, 2]
    
    // the 3 numbers shall be i, j, k
    let total
    let closestTotal
    let currentDelta
    let minDelta

    // time = O(n^2)
    // space = 1
    
    for (let i = 0; i < nums.length-2; i++) {
        // fix ith nunmber as the left one
        let j = i+1
        let k = nums.length-1
        
        while (j<k) {
            total = nums[i] + nums[j] + nums[k]
            
            if (total === target) return total
            
            currentDelta = total-target
        
            
            if (currentDelta<0) {
                // incrrement j to a different integer
                j++
                while (nums[j] === nums[j-1]) j++
            }
            
            if (currentDelta>0) {
                // decrement k to a different integer
                k--
                while (nums[k] === nums[k+1]) k--
            }
            
            if (!minDelta || Math.abs(currentDelta) < minDelta) {
                minDelta = Math.abs(currentDelta)
                closestTotal = total
            }
        }
        
        while (nums[i+1]===nums[i]) i++
    }
    
    return closestTotal 
    
    
};