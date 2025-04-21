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
 *    - head: ListNode | null — the head of a singly linked list
 */
function reorderList(head: ListNode | null): void {

    /**
     * 2. What DSA/Algo?
     *    - Two pointers to find middle
     *    - Reverse second half of the list
     *    - Merge two halves in alternating pattern
     */

    if (!head || !head.next) return;

    // Step 1: Find middle using slow and fast pointers
    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse second half
    let prev: ListNode | null = null;
    let curr = slow.next;
    slow.next = null;

    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Step 3: Merge first and reversed second halves
    let first = head;
    let second = prev;

    while (second !== null) {
        const temp1 = first.next;
        const temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1!;
        second = temp2;
    }

    /**
     * 4. Output:
     *    - Nothing returned; list is reordered in-place
     */
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
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
 *    - head: ListNode | null — the head of a singly linked list
 *
 * 2. What DSA/Algo?
 *    - Use slow and fast pointers to find the midpoint
 *    - Reverse the second half of the list
 *    - Merge two halves by alternating nodes
 *
 * 3. What to do with the data?
 *    - Find the middle using fast and slow
 *    - Reverse second half of the list
 *    - Merge first and reversed halves in-place
 *
 * 4. Output:
 *    - No return value; reorder the list in-place
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function reorderList(head: ListNode | null): void {
    if (!head || !head.next) return;

    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev: ListNode | null = null;
    let curr = slow.next;
    slow.next = null;

    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let first = head;
    let second = prev;

    while (second !== null) {
        const temp1 = first.next;
        const temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1!;
        second = temp2;
    }
}
