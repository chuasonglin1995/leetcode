/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {

  let intNum = 0
  
  // Initialize object for roman to integer key values
  const map = {
      'I': 1,
      'IV':4,
      'V': 5,
      'IX': 9,
      'X': 10,
      'XL': 40,
      'L': 50,
      'XC': 90,
      'C': 100,
      'CD': 400,
      'D': 500,
      'CM': 900,
      'M': 1000
  }
  
  for (i=0; i<s.length; i++) {
      if (map[s[i] + s[i+1]]) {
          intNum += map[s[i] + s[i+1]]
          i++
      } else {
          intNum += map[s[i]]
      }
  }
  
  return intNum
};