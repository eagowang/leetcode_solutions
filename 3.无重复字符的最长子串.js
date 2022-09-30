/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (38.93%)
 * Likes:    7904
 * Dislikes: 0
 * Total Accepted:    1.9M
 * Total Submissions: 4.8M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 解法很多：1.快慢指针，2.滑动窗口，有点类似快慢指针（快指针为不重复字符串的末尾位置） 3.一层循环，根据lastIndexOf截取，3.
var lengthOfLongestSubstring = function (s) {
  // hash集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  let rk = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (i != 0) {
      occ.delete(s.charAt(i - 1));
    }
    while (rk < n && !occ.has(s.charAt(rk))) {
      occ.add(s.charAt(rk));
      rk++;
    }
    ans = Math.max(ans, rk - i);
  }
  return ans;
};
// var lengthOfLongestSubstring = function(s) {
//   var map = new Map();
//   var max = 0;
//   for(var i = 0,j = 0; j < s.length; j++){
//       if(map.has(s[j])){
//           i = Math.max(map.get(s[j]), i);
//       }
//       max = Math.max(max, j - i + 1);
//       map.set(s[j], j+1);
//   }
//   return max;
// };
// @lc code=end
