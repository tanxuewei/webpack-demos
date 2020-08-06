// 大写
module.exports = function (word) {
  word = word.toUpperCase()
  return `module.exports = '${word}'`
}