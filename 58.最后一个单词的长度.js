/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode.cn/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (41.31%)
 * Likes:    496
 * Dislikes: 0
 * Total Accepted:    365.8K
 * Total Submissions: 885.2K
 * Testcase Example:  '"Hello World"'
 *
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 *
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "Hello World"
 * 输出：5
 * 解释：最后一个单词是“World”，长度为5。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "   fly me   to   the moon  "
 * 输出：4
 * 解释：最后一个单词是“moon”，长度为4。
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "luffy is still joyboy"
 * 输出：6
 * 解释：最后一个单词是长度为6的“joyboy”。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^4
 * s 仅有英文字母和空格 ' ' 组成
 * s 中至少存在一个单词
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function (s) {
//   var ans = 0;
//   var sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === ' ') {
//       if (sum !== 0) {
//         ans = sum;
//       }
//       sum = 0;
//     } else {
//       sum++;
//     }
//   }

//   return sum > 0 ? sum : ans;
// };

var lengthOfLastWord = function (s) {
  // 反向遍历
  let index = s.length - 1;
  while (s[index] === ' ') {
    index--;
  }
  let wordLength = 0;
  while (index >= 0 && s[index] !== ' ') {
    wordLength++;
    index--;
  }
  return wordLength;
};
// @lc code=end
