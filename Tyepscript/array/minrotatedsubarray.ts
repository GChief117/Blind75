/**
 * 1. What is the input?
 *    - nums: number[] — a rotated, ascending sorted array of unique integers
 */
function findMin(nums: number[]): number {

    /**
     * 2. What DSA/Algo?
     *    - Binary Search
     *    - Leverage the rotated sorted structure
     *    - The minimum value is the only element where the previous value is greater (or it's the first element)
     */

    let left = 0;
    let right = nums.length - 1;

    /**
     * 3. What to do with the data?
     *    - While left < right:
     *      - Compute mid
     *      - If nums[mid] > nums[right], min must be to the right
     *      - Else, min is at mid or to the left
     */
    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    /**
     * 4. Output:
     *    - After the loop, left will point to the minimum element
     */
    return nums[left];
}

/**
 * Time Complexity: O(log n) — Binary search
 * Space Complexity: O(1) — Constant space
 */

/**
 * 1. What is the input?
 *    - nums: number[] — a sorted and rotated array of unique integers
 *
 * 2. What DSA/Algo?
 *    - Binary search technique
 *    - Compare mid element with rightmost to narrow down where the rotation/minimum lies
 *    - Key property: minimum element is the pivot point where rotation occurred
 *
 * 3. What to do with the data?
 *    - Initialize left = 0, right = nums.length - 1
 *    - While left < right:
 *        - Compute mid
 *        - If nums[mid] > nums[right], go right: left = mid + 1
 *        - Else, go left: right = mid
 *
 * 4. Output:
 *    - Return nums[left], which will be the smallest element
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
}
