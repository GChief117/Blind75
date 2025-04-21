/**
 * 1. What is the input?
 *    - nums: number[] — an array of integers
 */
function maxProduct(nums: number[]): number {

    /**
     * 2. What DSA/Algo?
     *    - Dynamic Programming (one-pass)
     *    - Track current max and min products at each index
     *    - Because multiplying by a negative can flip max ↔ min
     */

    let currentMax = nums[0];
    let currentMin = nums[0];
    let globalMax = nums[0];

    /**
     * 3. What to do with the data?
     *    - Loop through nums starting from index 1
     *    - If number is negative, swap currentMax and currentMin
     *    - Update currentMax = max(num, currentMax * num)
     *    - Update currentMin = min(num, currentMin * num)
     *    - Update globalMax = max(globalMax, currentMax)
     */
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        if (num < 0) {
            [currentMax, currentMin] = [currentMin, currentMax]; // flip
        }

        currentMax = Math.max(num, currentMax * num);
        currentMin = Math.min(num, currentMin * num);
        globalMax = Math.max(globalMax, currentMax);
    }

    /**
     * 4. Output:
     *    - Return the maximum product of any contiguous subarray
     */
    return globalMax;
}

/**
 * Time Complexity: O(n) — One pass through nums
 * Space Complexity: O(1) — Constant space
 */


/**
 * 1. What is the input?
 *    - nums: number[] — an array of integers
 *
 * 2. What DSA/Algo?
 *    - Dynamic programming approach
 *    - Track both current max and min products (due to negative flips)
 *    - Use a greedy update at each step based on previous values
 *
 * 3. What to do with the data?
 *    - Iterate through array from index 1
 *    - If current number is negative, swap currentMax and currentMin
 *    - Update currentMax = max(num, currentMax * num)
 *    - Update currentMin = min(num, currentMin * num)
 *    - Update globalMax to store the best product seen so far
 *
 * 4. Output:
 *    - Return globalMax — the highest product of any contiguous subarray
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function maxProduct(nums: number[]): number {
    let currentMax = nums[0];
    let currentMin = nums[0];
    let globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        if (num < 0) {
            [currentMax, currentMin] = [currentMin, currentMax];
        }

        currentMax = Math.max(num, currentMax * num);
        currentMin = Math.min(num, currentMin * num);
        globalMax = Math.max(globalMax, currentMax);
    }

    return globalMax;
}
