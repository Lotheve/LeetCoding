// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// https://leetcode.com/problems/add-two-numbers/description/

/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/*
1.思路一 将两个链表转换为数字相加后再转换回链表。这种方式T(n)=O(n)，但是问题在于如果数值很大会存在问题，因此逻辑上可行但实际会有问题。
2.思路二 直接遍历两个链表，逐个节点相加，遇到进位保存进位值。直到两个链表的遍历完成，最后若存在进位值，需再加一个节点。T(n)=O(n)
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    var num1;
    var num2;
    var num;
    var head;
    var p;
    var p1 = l1;
    var p2 = l2;
    var carry = 0;
    while (p1 || p2) {
        num1 = p1 ? p1.val : 0;
        num2 = p2 ? p2.val : 0; 
        var num = num1 + num2 + carry;
        if (num >= 10) {
            carry = parseInt(num/10);
            num = num%10;
        } else {
            carry = 0;
        }
        if (!head) {
            head = new ListNode(num);
            p = head;
        } else {
            p.next = new ListNode(num);
            p = p.next;
        }
        p1 = p1 ? p1.next : p1;
        p2 = p2 ? p2.next : p2;
    }

    if (carry) {
        p.next = new ListNode(carry);
    }

    return head;
};


// 测试用例
var node1 = new ListNode(5);
var node2 = new ListNode(4);
var node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

var node4 = new ListNode(5);
var node5 = new ListNode(4);
var node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;

var result = addTwoNumbers(node1, node4);
console.log(result); // ListNode {val: 0,next: ListNode { val: 9, next: ListNode { val: 7, next: null } } }
