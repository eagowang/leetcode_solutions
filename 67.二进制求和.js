/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode.cn/problems/add-binary/description/
 *
 * algorithms
 * Easy (53.56%)
 * Likes:    885
 * Dislikes: 0
 * Total Accepted:    279.7K
 * Total Submissions: 522.2K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入:a = "11", b = "1"
 * 输出："100"
 *
 * 示例 2：
 *
 *
 * 输入：a = "1010", b = "1011"
 * 输出："10101"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= a.length, b.length <= 10^4
 * a 和 b 仅由字符 '0' 或 '1' 组成
 * 字符串如果不是 "0" ，就不含前导零
 *
 *
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var x = a.length - 1;
  var y = b.length - 1;
  var carry = 0;
  var arr = [];
  while (x >= 0 || y >= 0) {
    var m = x >= 0 ? parseInt(a[x--]) : 0;
    var n = y >= 0 ? parseInt(b[y--]) : 0;
    var p = (m + n + carry) % 2;
    carry = (m + n + carry) >> 1;
    arr.unshift(p);
  }
  if (carry > 0) {
    arr.unshift(carry);
  }
  return arr.join('');
};
console.log(addBinary('11', '1'));
// @lc code=end
