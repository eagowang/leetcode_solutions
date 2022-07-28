/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    // 计算差值
    var diff = target - nums[i];
    // map中存在差值对应的位置，直接返回
    if (map[nums[i]] !== undefined) {
      return [map[nums[i]], i];
    } else {
      map[diff] = i;
    }
  }
};
// @lc code=end
