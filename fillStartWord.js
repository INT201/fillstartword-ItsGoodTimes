const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word.includes(startWord)) {
    return word
  } else {
      return String.prototype.concat(startWord,word)
  }
}
module.exports = fillStartWord