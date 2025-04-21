/**
 * 1. What is the input?
 *    - nums: number[] — a rotated sorted array of unique integers
 *    - target: number — the value to search for
 */
function search(nums: number[], target: number): number {

    /**
     * 2. What DSA/Algo?
     *    - Modified Binary Search
     *    - Determine which half of the array is sorted at each step
     *    - Decide to go left or right based on where target could lie
     */

    let left = 0;
    let right = nums.length - 1;

    /**
     * 3. What to do with the data?
     *    - While left <= right:
     *      - Find mid
     *      - If nums[mid] === target, return mid
     *      - If left half is sorted:
     *          - Check if target lies in that half, narrow range accordingly
     *      - Else right half must be sorted:
     *          - Check if target lies there
     */
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            /**
             * 4. Output:
             *    - Return mid if we find the target
             */
            return mid;
        }

        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    /**
     * 4. Output (not found case):
     *    - Return -1 if target is not present
     */
    return -1;
}

/**
 * Time Complexity: O(log n) — Binary search with rotated logic
 * Space Complexity: O(1)
 */


/**
 * 1. What is the input?
 *    - nums: number[] — a possibly rotated, ascending array of unique integers
 *    - target: number — the value to find
 *
 * 2. What DSA/Algo?
 *    - Modified Binary Search
 *    - At each step, determine if the left or right half is sorted
 *    - Narrow search to the half that could contain the target
 *
 * 3. What to do with the data?
 *    - Use left and right pointers
 *    - While left <= right:
 *      - Compute mid
 *      - If nums[mid] === target, return mid
 *      - If left half is sorted and target is within range, go left
 *      - Else go right, or vice versa if right half is sorted
 *
 * 4. Output:
 *    - Return index of target if found
 *    - Return -1 otherwise
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}
