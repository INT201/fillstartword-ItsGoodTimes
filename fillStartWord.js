const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(String(startWord).match(word)) {
    console.log(word)
  }
  console.log(startWord + word)
}
module.exports = fillStartWord
