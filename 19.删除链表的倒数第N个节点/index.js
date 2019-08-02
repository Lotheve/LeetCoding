// 还有一种只需要遍历一次的技巧 设置两个指针p1，p2，均指向head。遍历时p1先移动，当移动到p1、p2间隔为n时，p1、p2同时移动。此时当p1指向null时，p2就是目标节点的前一个节点。


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) {
      return head;
    }
    let num = 1;
    let p = head;
    while (p.next) {
      num++;
      p = p.next;
    }
    if (n === num) {
      head = head.next;
      return head;
    } else {
      p = head;
      for (let i = 0; i < num-n-1; i++) {
        p = p.next;
      }
      p.next = p.next.next;
      return head;
    }
};