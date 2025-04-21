/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * 1. What is the input?
 *    - lists: (ListNode | null)[] — array of k sorted linked lists
 */
function mergeKLists(lists: (ListNode | null)[]): ListNode | null {

    /**
     * 2. What DSA/Algo?
     *    - Divide and Conquer (recursive merge)
     *    - Repeatedly split and merge halves of the list
     */
    return mergeLists(lists, 0, lists.length - 1);
}

function mergeLists(lists: (ListNode | null)[], start: number, end: number): ListNode | null {

    /**
     * 3. What to do with the data?
     *    - Base case: return null if out of bounds, or return the single list
     */
    if (start > end) return null;
    if (start === end) return lists[start];

    // Split the array into halves
    const mid = Math.floor((start + end) / 2);
    let left = mergeLists(lists, start, mid);
    let right = mergeLists(lists, mid + 1, end);

    // Merge two sorted linked lists (same as mergeTwoLists)
    const fakeHead = { next: null } as ListNode;
    let temp = fakeHead;

    while (left !== null || right !== null) {
        if (!right || (left && left.val < right.val)) {
            temp.next = left;
            left = left.next;
        } else {
            temp.next = right;
            right = right.next;
        }
        temp = temp.next;
        temp.next = null;
    }

    /**
     * 4. Output:
     *    - Return the fully merged sorted linked list
     */
    return fakeHead.next;
}

/**
 * Time Complexity: O(N log k), where N is total number of nodes and k is number of lists
 * Space Complexity: O(log k) — due to recursion stack
 * 
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * 1. What is the input?
 *    - lists: (ListNode | null)[] — an array of k sorted linked lists
 *
 * 2. What DSA/Algo?
 *    - Divide and Conquer approach
 *    - Repeatedly split the list into halves and merge them recursively
 *
 * 3. What to do with the data?
 *    - Use recursion to break down the array into single list items
 *    - Merge two sorted lists at a time
 *    - Use a dummy node to stitch lists together in sorted order
 *
 * 4. Output:
 *    - Return the merged sorted linked list
 *
 * Time Complexity: O(N log k)
 * Space Complexity: O(log k)
 */

function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
    return mergeLists(lists, 0, lists.length - 1);
}

function mergeLists(lists: (ListNode | null)[], start: number, end: number): ListNode | null {
    if (start > end) return null;
    if (start === end) return lists[start];

    const mid = Math.floor((start + end) / 2);
    let left = mergeLists(lists, start, mid);
    let right = mergeLists(lists, mid + 1, end);

    const fakeHead = { next: null } as ListNode;
    let temp = fakeHead;

    while (left !== null || right !== null) {
        if (!right || (left && left.val < right.val)) {
            temp.next = left;
            left = left.next;
        } else {
            temp.next = right;
            right = right.next;
        }
        temp = temp.next;
        temp.next = null;
    }

    return fakeHead.next;
}
