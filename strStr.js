/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    
  if (!needle) return 0
  
  for (i=0; i<haystack.length-needle.length+1; i++) {
      // console.log(i)
      tempHaystack = haystack.substring(i, i+needle.length)
      // console.log(tempHaystack)
      if (tempHaystack === needle) return i
  }
  
  return -1
  
};