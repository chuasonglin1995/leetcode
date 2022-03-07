/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    
    
  let fPointer = m-1 
  let sPointer = n-1 
  let iPointer = nums1.length-1 
  
  while (sPointer>=0) {

      let num1 = nums1[fPointer]
      let num2 = nums2[sPointer]
      
      if (num1 > num2) {
          nums1[iPointer] = num1
          iPointer --
          fPointer --
      } 
      
      else {
          nums1[iPointer] = num2
          iPointer --
          sPointer --
      }
  }

};