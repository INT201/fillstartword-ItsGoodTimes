const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(startWord === null || startWord === undefined || word === null || word === undefined) {
    return undefined
    }else {
     if(word.includes(startWord)) {
        return word
      } else {
        return String.prototype.concat(startWord,word)
      }
    }  
}
module.exports = fillStartWord