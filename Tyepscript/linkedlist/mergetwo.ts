/**
 * 1. What is the input?
 *    - list1: ListNode | null — first sorted linked list
 *    - list2: ListNode | null — second sorted linked list
 *
 * 2. What DSA/Algo?
 *    - Two-pointer technique with a dummy node
 *    - Iteratively compare and stitch the smaller node to the merged list
 *
 * 3. What to do with the data?
 *    - Create a dummy node to build the result list
 *    - Use a pointer to track the current node
 *    - While both lists are not null:
 *        - Append the smaller value node to current.next
 *        - Move current and the selected list forward
 *    - Attach the remaining part of the non-null list
 *
 * 4. Output:
 *    - Return dummy.next, which points to the merged sorted list
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 !== null ? list1 : list2;
    return dummy.next;
}
