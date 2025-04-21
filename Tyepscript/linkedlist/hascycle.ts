/**
 * 1. What is the input?
 *    - head: ListNode | null — the head of a singly linked list
 */
function hasCycle(head: ListNode | null): boolean {

    /**
     * 2. What DSA/Algo?
     *    - Floyd’s Cycle Detection Algorithm (Tortoise and Hare)
     *    - Use two pointers: slow and fast
     *    - If there’s a cycle, the two will meet at some point
     */

    let slow = head;
    let fast = head;

    /**
     * 3. What to do with the data?
     *    - While fast and fast.next are not null:
     *      - Move slow by one step
     *      - Move fast by two steps
     *      - If they meet, there’s a cycle
     */
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            /**
             * 4. Output:
             *    - Return true if a cycle is detected
             */
            return true;
        }
    }

    /**
     * 4. Output (no cycle found):
     *    - Return false
     */
    return false;
}

/**
 * Time Complexity: O(n) — At most 2n steps for fast pointer to detect the cycle
 * Space Complexity: O(1) — No extra space used
 */

/**
 * 1. What is the input?
 *    - head: ListNode | null — the starting node of a singly linked list
 *
 * 2. What DSA/Algo?
 *    - Floyd’s Cycle Detection Algorithm (Tortoise and Hare)
 *    - Use two pointers: slow (1x speed) and fast (2x speed)
 *    - If there is a cycle, they will eventually meet
 *
 * 3. What to do with the data?
 *    - Initialize slow and fast to head
 *    - While fast and fast.next are not null:
 *        - Move slow by one node
 *        - Move fast by two nodes
 *        - If slow equals fast, a cycle exists
 *
 * 4. Output:
 *    - Return true if a cycle is found
 *    - Return false if we reach the end of the list
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}
