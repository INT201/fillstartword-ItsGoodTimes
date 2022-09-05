const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word.includes(startWord)) {
    console.log(word)
  } else {
      console.log(String.prototype.concat(startWord,word))
  }
}
module.exports = fillStartWord

console.log(fillStartWord('first','Time'))