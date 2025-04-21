/**
 * 1. What is the input?
 *    - height: number[] — array of non-negative integers representing vertical line heights
 */
function maxArea(height: number[]): number {

    /**
     * 2. What DSA/Algo?
     *    - Two-pointer approach
     *    - Start from both ends, moving the pointer at the shorter line inward
     *    - Greedy: always move the pointer with the smaller height to possibly find a taller one
     */

    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    /**
     * 3. What to do with the data?
     *    - While left < right:
     *        - Calculate current area = min(height[left], height[right]) * (right - left)
     *        - Update maxArea if current area is greater
     *        - Move the shorter pointer inward
     */
    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        const area = h * w;
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    /**
     * 4. Output:
     *    - Return the maximum area found
     */
    return maxArea;
}

/**
 * Time Complexity: O(n) — Single pass with two pointers
 * Space Complexity: O(1) — Constant space
 */


/**
 * 1. What is the input?
 *    - height: number[] — array where height[i] represents the height of a vertical line at position i
 *
 * 2. What DSA/Algo?
 *    - Two-pointer greedy approach
 *    - Maximize area between two lines by moving inward from both ends
 *    - Always move the pointer pointing to the shorter line
 *
 * 3. What to do with the data?
 *    - Initialize two pointers at start and end of array
 *    - While left < right:
 *        - Calculate current area as min height × distance between pointers
 *        - Update max area if current area is greater
 *        - Move the pointer at the shorter line inward
 *
 * 4. Output:
 *    - Return the maximum area found between any two lines
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        const area = h * w;
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
