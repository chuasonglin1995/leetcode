/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, r=0, c=0, memo ={}) {
    
    const pos = r + ',' + c
    if (pos in memo) return memo[pos]
    if (r > m-1 || c > n-1) return 0
    if (r==m-1 && c==n-1) return 1
    const right = uniquePaths(m, n, r+1, c, memo)
    const left = uniquePaths(m, n, r, c+1, memo)
    memo[pos] = right + left
    return right + left
};