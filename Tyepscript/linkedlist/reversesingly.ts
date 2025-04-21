/**
 * 1. What is the input?
 *    - head: ListNode | null — the head of a singly linked list
 */
function reverseList(head: ListNode | null): ListNode | null {

    /**
     * 2. What DSA/Algo?
     *    - Iterative pointer reversal using three pointers:
     *      current, prev, and next
     *    - Reverse each node's .next pointer while traversing
     */

    let current = head;
    let prev: ListNode = null;
    let next: ListNode = null;

    /**
     * 3. What to do with the data?
     *    - While current is not null:
     *        - Save next node
     *        - Point current.next to previous node (reverse link)
     *        - Move prev to current
     *        - Move current to next
     */
    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    /**
     * 4. Output:
     *    - Return prev, now the new head of the reversed list
     */
    return prev;
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */


/**
 * 1. What is the input?
 *    - head: ListNode | null — the starting node of a singly linked list
 *
 * 2. What DSA/Algo?
 *    - Iterative reversal using three pointers:
 *      current, prev, and next
 *    - Reverse the direction of each node one at a time
 *
 * 3. What to do with the data?
 *    - Initialize current = head, prev = null
 *    - While current exists:
 *        - Store current.next in next
 *        - Set current.next = prev
 *        - Move prev = current, and current = next
 *
 * 4. Output:
 *    - Return prev, which will now be the new head of the reversed list
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function reverseList(head: ListNode | null): ListNode | null {
    let current = head;
    let prev: ListNode = null;
    let next: ListNode = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}
