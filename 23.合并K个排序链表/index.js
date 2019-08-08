// 思路是两两合并，在"合并两个有序链表"的基础上实现就很容易实现。逐个遍历lists，两两合并（1和2合并，再将结果与3合并...），时间复杂度O(kN)。另一种优化的方法是在此基础上采用分治的思想（1和2合并，3和4合并...，再将结果再两两合并），这样能够减少重复遍历的链表节点数，时间复杂度O(Nlogk)。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
  let p1 = l1, p2 = l2;
  let head = null, p = null;
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      if (!head) {
        head = p1;
        p = head;
      } else {
        p.next = p1;
        p = p.next;
      }
      p1 = p1.next;
    } else {
      if (!head) {
        head = p2;
        p = head;
      } else {
        p.next = p2;
        p = p.next;
      }
      p2 = p2.next;
    }
  }

  if (p1) {
    if (!head) {
      head = p1;
    } else {
      p.next = p1;
    }
  } 
  if (p2) {
    if (!head) {
      head = p2;
    } else {
      p.next = p2;
    }
  }
  return head;
};

var mergeKLists = function(lists) {
    if (lists.length === 0 ) {
      return null;
    }
    let result = lists.reduce((pre, cur, index)=>{
      return mergeTwoLists(pre, cur);
    })
    return result;
};