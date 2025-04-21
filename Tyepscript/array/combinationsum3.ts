/**
 * 1. What is the input?
 *    - nums: number[] — an array of integers
 */
function containsDuplicate(nums: number[]): boolean {

    /**
     * 2. What DSA/Algo?
     *    - Use a Set to track seen elements
     *    - Set has O(1) average time complexity for add and lookup
     */

    const seen = new Set<number>();

    /**
     * 3. What to do with the data?
     *    - Iterate through each number
     *    - If number is already in the Set, return true (duplicate found)
     *    - Otherwise, add it to the Set
     */
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            /**
             * 4. Output:
             *    - Return true if a duplicate is found
             */
            return true;
        }
        seen.add(nums[i]);
    }

    /**
     * 4. Output (if loop completes):
     *    - Return false — all elements are distinct
     */
    return false;
}

/**
 * Time Complexity: O(n) — Single pass through array
 * Space Complexity: O(n) — In worst case, all elements are stored in Set
 */



/**
 * 1. What is the input?
 *    - nums: number[] — an array of integers
 *
 * 2. What DSA/Algo?
 *    - Use a Set to store unique values while iterating
 *    - Check for duplicates by seeing if a number is already in the Set
 *
 * 3. What to do with the data?
 *    - Iterate through nums
 *    - If a number exists in the Set, return true
 *    - Otherwise, add it to the Set and continue
 *
 * 4. Output:
 *    - Return true if a duplicate is found
 *    - Return false if all elements are distinct
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        }
        seen.add(nums[i]);
    }

    return false;
}
