// 倒叙
module.exports = function (word) {
  word = word.split('').reverse().join('')
  // return word
  this.callback(null, word)
  return;
}