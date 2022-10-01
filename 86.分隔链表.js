/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode.cn/problems/partition-list/description/
 *
 * algorithms
 * Medium (63.75%)
 * Likes:    627
 * Dislikes: 0
 * Total Accepted:    179.4K
 * Total Submissions: 281.3K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 *
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,4,3,2,5,2], x = 3
 * 输出：[1,2,2,4,3,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [2,1], x = 2
 * 输出：[1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 200] 内
 * -100
 * -200
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // 方法一，维护两个链表small和large，遍历完之后将small链表尾结点指向large链表的头结点
  var small = new ListNode(0);
  var large = new ListNode(0);
  var smallHead = small;
  var largeHead = large;
  while (head != null) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      large.next = head;
      large = large.next;
    }
    head = head.next;
  }
  large.next = null;
  small.next = largeHead.next;
  return smallHead.next;
};
// @lc code=end
