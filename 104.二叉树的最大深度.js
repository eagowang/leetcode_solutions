/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (77.11%)
 * Likes:    1389
 * Dislikes: 0
 * Total Accepted:    855.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 *
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最大深度 3 。
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 递归，深度优先搜索
  // 左子树和右子树的最大深度l和r，那么该二叉树的最大深度即为max(l,r) + 1
  // if (!root) return 0;
  // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  //
  // 广度优先搜索
  if (!root) return 0;
  var queue = [root];
  var ans = 0;
  while (queue.length > 0) {
    var size = queue.length;
    while (size > 0) {
      var node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      size--;
    }
    ans++;
  }
  return ans;
};
// @lc code=end
