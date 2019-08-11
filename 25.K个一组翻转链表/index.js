//递归 借助一个翻转链表的函数。
//遍历链表，当结点数小于k时，直接返回。当大于k时，对前k个节点进行翻转，后面的节点递归执行。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function reverseAllNode(head) {
    if (!head) return head;
    let p1 = head, p2 = head, p3 = null;
    while (p1.next) {
        p1 = p1.next;
        p2.next = p3;
        p3 = p2;
        p2 = p1;
    }
    p2.next = p3;
    return p2;
}

var reverseKGroup = function (head, k) {
    if (!head) return head;
    let count = 0;
    let p1 = head, p2 = null;
    while (count < k && p1 != null) {
        count++;
        p2 = p1;
        p1 = p1.next;
    }
    if (count < k) {
        return head;
    } else {
        p2.next = null;
        let reversed = reverseAllNode(head);
        head.next = reverseKGroup(p1, k);
        return reversed;
    }
};

let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);
let n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

let result = reverseKGroup(n1, 2);

let p = result;
while (p) {
    console.log(p.val);
    p = p.next;
}
//2 1 4 3 5