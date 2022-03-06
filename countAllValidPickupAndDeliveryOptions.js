/**
 * @param {number} n
 * @return {number}
 */
 var countOrders = function(n) {
    
    
  // N = 1
  // P1, D1 
  
  // N = 2
  // X X
  // 3 + 2 + 1 = 6 *f(1) = 6
  
  // N = 3
  // X X X X 
  // 5 + 4 + 3 + 2 + 1 *f(2) = 15 * 6 = 90
  
  // N = 4
  // P X X X X X X
  // the 7 refers to the 7 delivery ways if P is at P X X X X X X
  // the 6 refers to the 6 delivery ways if P is at X P X X X X X
  // 7 + 6 + 5 ... + 1 = 28 * f(3) = 28 * 90 = 2520
  
  let ans = 1
  for (i=2; i<n+1; i++) {
      let previousInPlace = (i-1)*2
      let maxPickup = previousInPlace + 1
      let totalPickups = (maxPickup + 1) * (previousInPlace/2) + i
      ans = ans * totalPickups
      ans = ans % (Math.pow(10,9) + 7)
  }
  
  return ans % (Math.pow(10,9) + 7)
};