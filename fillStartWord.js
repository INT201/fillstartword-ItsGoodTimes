const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
//   ให้เขียน Function ชื่อ fillStartWord (startWord, word) เพื่อรับข้อความใด ๆ โดยให้ return wordข้อความที่รับเข้ามาและเติม startWord ก่อนหน้าข้อความนั้น โดยถ้า word นั้นมี startword นั้นอยู่แล้ว ไม่ต้องเติม startword อีก โดยถ้า word มีค่า null หรือ undefined ให้ return เป็น undefined
// ตัวอย่างเช่น
// startWord = "1-2565-", word = "Hello World", จะได้ "1-2565-Hello World"
// startWord = "JS" , word = "beginner" จะได้ "JSbeginner"
// startWord = "first" , word = "firststep" จะได้ "firststep"
// startWord = "first" , word = null จะได้ undefined
// startWord = "first" , word = undefined จะได้ undefined
  if (word === null || word == undefined) {
    return undefined
  } else {
      if (word.includes(startWord)) {
      return word
    } else {
      return startWord + word
    }
  }

  
}
module.exports = fillStartWord

// &&
// ||
















































  // if(startWord === null || startWord === undefined || word === null || word === undefined) {
  //   return undefined
  //   }else {
  //    if(word.includes(startWord)) {
  //       return word
  //     } else {
  //       return String.prototype.concat(startWord,word)
  //     }
  //   }  