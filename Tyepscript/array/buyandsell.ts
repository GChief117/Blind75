/**
 * 1. What is the input?
 *    - prices: number[] — an array where prices[i] is the stock price on the ith day
 */

function maxProfit(prices: number[]): number {

    /**
     * 2. What DSA/Algo?
     *    - Use a two-pointer sliding window approach
     *    - One pointer tracks the minimum (buy) price seen so far
     *    - The other iterates through the array to find the maximum profit
     */

    let minPrice = Infinity; // Smallest price we've seen so far
    let maxProfit = 0;       // Highest profit possible

    /**
     * 3. What to do with the data?
     *    - Loop through each price
     *    - If price is less than minPrice, update minPrice
     *    - Else calculate profit = currentPrice - minPrice
     *    - If profit is greater than maxProfit, update maxProfit
     */
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // found a better day to buy
        } else {
            const profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit; // found a better day to sell
            }
        }
    }

    /**
     * 4. Output:
     *    - Return the maximum profit that can be achieved
     *    - Return 0 if no profitable transaction exists
     */
    return maxProfit;
}


/**
 * 1. What is the input?
 *    - prices: number[] — an array where prices[i] is the price of a stock on the ith day
 *
 * 2. What DSA/Algo?
 *    - Sliding window (two-pointer) technique
 *    - Track the lowest price seen so far (buy point)
 *    - For each day, calculate the profit if sold today
 *    - Update max profit if that profit is greater than current max
 *
 * 3. What to do with the data?
 *    - Iterate through the array
 *    - Track minPrice (lowest price so far)
 *    - Calculate currentProfit = prices[i] - minPrice
 *    - Update maxProfit if currentProfit is higher
 *
 * 4. Output:
 *    - Return maxProfit
 *    - If no profit is possible (i.e., prices only decrease), return 0
 * 
 * Time Complexity: O(n) — Single pass through the array
 * Space Complexity: O(1) — Uses only two scalar variables
 */

function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            const profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}
