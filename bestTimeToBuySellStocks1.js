/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    
  let lowestPrice = prices[0]
  let maxProfit = 0
  
  for (let i=0; i<prices.length; i++) {
      lowestPrice = Math.min(lowestPrice, prices[i])
      maxProfit = Math.max(maxProfit, prices[i]-lowestPrice)
  }
      
  return maxProfit
  
};