// 递归

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
    if (!head || !head.next) {
      return head;
    }
    let h = head.next;
    head.next = head.next.next;
    h.next = head;
    h.next.next = swapPairs(h.next.next);
    return h;
};