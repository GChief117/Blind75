/**
 * 1. What is the input?
 *    - nums: number[] — an array of integers
 */
function productExceptSelf(nums: number[]): number[] {

    /**
     * 2. What DSA/Algo?
     *    - Use two passes with prefix and suffix products
     *    - Avoid division entirely
     *    - Use a result array to build the output in-place
     */

    const n = nums.length;
    const result = new Array(n).fill(1);

    /**
     * 3. What to do with the data?
     *    - First pass: calculate left (prefix) products for each index
     */
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    /**
     *    - Second pass: calculate right (suffix) products and multiply in-place
     */
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    /**
     * 4. Output:
     *    - Return the result array containing the product of all elements except self
     */
    return result;
}

/**
 * Time Complexity: O(n) — Two passes over the input
 * Space Complexity: O(1) extra (not counting output array)
 */

/**
 * 1. What is the input?
 *    - nums: number[] — an array of integers
 *
 * 2. What DSA/Algo?
 *    - Prefix and suffix product approach
 *    - No division
 *    - One forward pass to build prefix products
 *    - One backward pass to apply suffix products in-place
 *
 * 3. What to do with the data?
 *    - Create result array initialized with 1s
 *    - First loop: populate result with prefix product up to each index
 *    - Second loop (reverse): multiply by suffix product from right to left
 *
 * 4. Output:
 *    - Return the result array with each index i containing product of all elements except nums[i]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) extra space (output array doesn’t count)
 */

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}
