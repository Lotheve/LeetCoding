// 链表基础

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}
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

let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(4);
n1.next = n2;
n2.next = n3;
let l1 = n1;

let n4 = new ListNode(1);
let n5 = new ListNode(3);
let n6 = new ListNode(4);
n4.next = n5;
n5.next = n6;
let l2 = n4;

let result = mergeTwoLists(l1, l2);
console.log(result);