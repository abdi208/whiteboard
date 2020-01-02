// function anagrams(strA, strB) {
//     aCharMap = charMap(strA)
//     bCharMap = charMap(strB)
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false
//     }
//     for (let char of aCharMap) {
//         if(aCharMap[char] !== bCharMap[char]) {
//             return false
//         }
//     }
//     return true
// }

// function charMap(str) {
//     const charMap = {}

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap
// }

// anagrams('hello', 'elloh')

function capitalize(str) {
    const words = str.split(' ')
    const newArr = []
  
    for (let word of words){
      newArr.push(word[0].toUpperCase() + word.slice(1))
    }
      console.log(newArr.join(' '))
      
    
  }
  
  capitalize('hi iam abdi') 