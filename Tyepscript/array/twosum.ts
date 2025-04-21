/**
 * 1. What is the input?
 *    - nums: number[] — an array of integers
 *    - target: number — the target sum to find
 */
function twoSum(nums: number[], target: number): number[] {

    /**
     * 2. What DSA/Algo?
     *    - We use a Hash Map to store numbers we've seen and their indices.
     *    - This gives us O(1) average time lookup.
     */
    const map: Map<number, number> = new Map(); // value -> index

    /**
     * 3. What to do with the data?
     *    - Iterate over nums
     *    - For each number, calculate the complement needed to reach target
     *    - If the complement is in the map, we’ve found our answer
     *    - Otherwise, store the current number and its index
     */
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            /**
             * 4. Output
             *    - If the complement exists, return its index and the current index
             */
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i); // Store current number and index
    }

    return []; // Only for safety; per constraints, this will never be reached
}

/**
 * 1. What is the input?
 *    - nums: number[] — array of integers
 *    - target: number — the target sum to find from two numbers in nums
 *
 * 2. What DSA/Algo?
 *    - Hash Map (Map<number, number>) for constant-time lookups
 *    - We store each number with its index as we iterate
 *
 * 3. What to do with the data?
 *    - Loop through the nums array
 *    - For each number, compute the complement (target - current number)
 *    - Check if the complement exists in the map:
 *        - If yes: return [index of complement, current index]
 *        - If no: store the current number and its index in the map
 *
 * 4. Output:
 *    - Return an array [i, j] such that nums[i] + nums[j] === target
 */

function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map(); // Stores number -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i);
    }

    return []; // Will never hit due to problem constraints
}
