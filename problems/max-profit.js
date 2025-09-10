// find the biggest profit you could make by buying low and selling high
// [7,1,5,3,6,4]
// Find the difference between the cheapest you could buy and the highest you could sell later

export const findMaxProfit = arr => {
  const minimumValue = Math.min(...arr)
  const rest = arr.slice(arr.indexOf(minimumValue) + 1)
  const maximumValue = Math.max(...rest)

  return maximumValue - minimumValue
}

export const findMaxProfitOneLiner = arr => 
  Math.max(...arr.slice(arr.indexOf(Math.min(...arr)) + 1)) -
  Math.min(...arr);

/**
 * Maximum Profit from Stock Trading (Dynamic Window - Modified)
 * Buy stock once and sell once for maximum profit
 * 
 * Time Complexity: O(n) where n is number of days
 * Space Complexity: O(1) - only using a few variables
 */
export const findMaxStockProfit = (stockPrices) => {
    if (stockPrices.length < 2) {
        return 0; // Need at least 2 days to buy and sell
    }
    
    let minPriceSoFar = stockPrices[0];  // Lowest price we've seen (best buy point)
    let maxProfitPossible = 0;           // Best profit we can achieve
    
    // Consider each day as a potential sell day
    for (let currentDay = 1; currentDay < stockPrices.length; currentDay++) {
        const todayPrice = stockPrices[currentDay];
        
        // Calculate profit if we sell today (having bought at minimum price)
        const profitIfSellToday = todayPrice - minPriceSoFar;
        
        // Update maximum profit if today's profit is better
        maxProfitPossible = Math.max(maxProfitPossible, profitIfSellToday);
        
        // Update minimum price if today's price is lower (better buy opportunity)
        minPriceSoFar = Math.min(minPriceSoFar, todayPrice);
    }
    
    return maxProfitPossible;
}