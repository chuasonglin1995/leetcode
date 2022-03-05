/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
  // bottom up approach
  const dp = new Array(amount+1).fill(amount+1)
  dp[0] = 0
  
  for (let i=1; i<amount+1; i++) {
      for (coin of coins) {
          if (i-coin >= 0) {
              // "dp[i - coin] + 1" is the new candidate to compare.
              dp[i] = Math.min(dp[i], 1+dp[i-coin])
          }
      }
  }
  // for coinChange([1,2,5], 11) dp = [ 0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3]

  return dp[amount] === amount+1 ? -1 : dp[amount]
  
};