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
 *    - head: ListNode | null — the head of a linked list
 *    - n: number — position from the end to remove
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    /**
     * 2. What DSA/Algo?
     *    - Two-pointer (fast and slow)
     *    - Move fast pointer n steps ahead
     *    - Then move both pointers until fast reaches the end
     *    - Slow will be right before the node to remove
     */

    const dummy = new ListNode(0, head); // Handle edge case where head is removed
    let slow: ListNode | null = dummy;
    let fast: ListNode | null = dummy;

    /**
     * 3. What to do with the data?
     *    - Advance fast pointer n+1 steps ahead to maintain gap
     */
    for (let i = 0; i <= n; i++) {
        fast = fast!.next;
    }

    // Move both pointers until fast reaches the end
    while (fast !== null) {
        slow = slow!.next;
        fast = fast.next;
    }

    // Remove the nth node
    slow!.next = slow!.next!.next;

    /**
     * 4. Output:
     *    - Return dummy.next as the new head
     */
    return dummy.next;
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
 *    - n: number — the nth node from the end to remove
 *
 * 2. What DSA/Algo?
 *    - Two-pointer technique (fast and slow)
 *    - Fast pointer advances n+1 steps to create a gap
 *    - Slow pointer stops just before the node to delete
 *
 * 3. What to do with the data?
 *    - Create a dummy node before head to simplify edge cases
 *    - Move fast pointer n+1 steps
 *    - Move fast and slow until fast hits end
 *    - Skip the target node via slow.next = slow.next.next
 *
 * 4. Output:
 *    - Return dummy.next as the updated head
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let slow: ListNode | null = dummy;
    let fast: ListNode | null = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast!.next;
    }

    while (fast !== null) {
        slow = slow!.next;
        fast = fast.next;
    }

    slow!.next = slow!.next!.next;
    return dummy.next;
}
