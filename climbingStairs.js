/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    return climbStairsHelper(n, 0, {})
    
};

var climbStairsHelper = (n, numWays, memoize) => {
    if (n<=0) return 0
    if (n===1) return numWays +=1
    if (n===2) return numWays +=2
    
    if (n in memoize) return memoize[n]
    
    let tempWays = climbStairsHelper(n-1, numWays, memoize) + climbStairsHelper(n-2, numWays, memoize)
    memoize[n] = tempWays
    return tempWays

}