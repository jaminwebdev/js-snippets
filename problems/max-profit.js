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

// sliding window
export const maxProfitOptimal = (prices) => {
  if (prices.length < 2) return 0;
  
  let minPrice = prices[0]; // Minimum price seen so far (best buy point)
  let maxProfit = 0;        // Maximum profit achievable
  
  for (let i = 1; i < prices.length; i++) {
      const currentPrice = prices[i];
      
      // Calculate profit if we sell today
      const profit = currentPrice - minPrice;
      maxProfit = Math.max(maxProfit, profit);
      
      // Update minimum price for future sales
      minPrice = Math.min(minPrice, currentPrice);
  }
  
  return maxProfit;
}