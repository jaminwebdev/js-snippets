// find the biggest profit you could make by buying low and selling high
// [7,1,5,3,6,4]
// Find the difference betweent he cheapest you could buy and the highest you could sell later

export const findMaxProfit = arr => {
  const minimumValue = Math.min(...arr)
  const rest = arr.slice(arr.indexOf(minimumValue) + 1)
  const maximumValue = Math.max(...rest)

  return maximumValue - minimumValue
}

export const findMaxProfitOneLiner = arr => 
  Math.max(...arr.slice(arr.indexOf(Math.min(...arr)) + 1)) -
  Math.min(...arr);
