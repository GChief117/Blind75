/**
 * 1. What is the input?
 *    - nums: number[] — an array of integers, may contain duplicates or negative numbers
 */
function threeSum(nums: number[]): number[][] {

    /**
     * 2. What DSA/Algo?
     *    - Sorting and Two Pointers
     *    - Sort the array first
     *    - For each number, use two pointers to find pairs that sum with it to 0
     *    - Skip duplicates to ensure unique triplets
     */

    nums.sort((a, b) => a - b); // Sort the array
    const result: number[][] = [];

    /**
     * 3. What to do with the data?
     *    - Loop through array with index i from 0 to n-2
     *    - If nums[i] is same as nums[i - 1], skip to avoid duplicate triplets
     *    - Use two pointers: left = i + 1, right = end of array
     *    - Check sum of nums[i] + nums[left] + nums[right]
     *        - If sum < 0: move left pointer
     *        - If sum > 0: move right pointer
     *        - If sum == 0: store triplet, move both pointers, and skip duplicates
     */
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate anchor

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Skip duplicate pairs
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            }
        }
    }

    /**
     * 4. Output:
     *    - Return array of unique triplets that sum to 0
     */
    return result;
}

/**
 * Time Complexity: O(n^2) — for each element, we do a two-pointer scan
 * Space Complexity: O(1) — if we ignore output space; otherwise O(k) for k triplets
 */


/**
 * 1. What is the input?
 *    - nums: number[] — an array of integers
 *
 * 2. What DSA/Algo?
 *    - Sort + Two Pointers
 *    - For each element nums[i], fix it and find two numbers nums[left], nums[right]
 *      such that nums[i] + nums[left] + nums[right] == 0
 *    - Use sorted array to efficiently skip duplicates and shrink the search space
 *
 * 3. What to do with the data?
 *    - Sort the array
 *    - For each index i from 0 to nums.length - 2:
 *        - Skip duplicate anchors
 *        - Set left = i + 1 and right = end
 *        - Move pointers based on the sum of nums[i] + nums[left] + nums[right]
 *        - Add valid triplets to result
 *        - Skip duplicate pairs
 *
 * 4. Output:
 *    - Return list of all unique triplets that sum to 0
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) (excluding result list)
 */

function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            }
        }
    }

    return result;
}
