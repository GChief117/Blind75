/**
 * 1. What is the input?
 *    - nums: number[] — an array of integers (can include negatives)
 */
function maxSubArray(nums: number[]): number {

    /**
     * 2. What DSA/Algo?
     *    - Kadane’s Algorithm
     *    - Track current subarray sum and global max sum
     */

    let currentSum = nums[0]; // Start with first element
    let maxSum = nums[0];     // Best seen so far

    /**
     * 3. What to do with the data?
     *    - Iterate from second element to end
     *    - For each number, either start fresh or extend previous subarray
     *    - Update maxSum whenever a higher sum is found
     */
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    /**
     * 4. Output:
     *    - Return the maximum sum of any contiguous subarray
     */
    return maxSum;
}

/**
 * Time Complexity: O(n) — Single pass through nums
 * Space Complexity: O(1) — Constant space used
 */


/**
 * 1. What is the input?
 *    - nums: number[] — an array of integers (including negatives)
 *
 * 2. What DSA/Algo?
 *    - Kadane's Algorithm
 *    - Track a running sum of the current subarray
 *    - Reset current sum when it drops below the current number
 *    - Keep a global maxSum to track the best subarray seen so far
 *
 * 3. What to do with the data?
 *    - Iterate from index 1 to end
 *    - Update currentSum to either current number or currentSum + number
 *    - Update maxSum if currentSum exceeds previous max
 *
 * 4. Output:
 *    - Return maxSum — the highest subarray sum found
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function maxSubArray(nums: number[]): number {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
