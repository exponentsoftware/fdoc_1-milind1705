

function countWord(str) {
    //const arr = [];
    const splitString = str.split(" ")
   
    console.log(splitString)
    return splitString.length
}
const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(countWord(sentence));

// function countWord(str) {
//    const splitString = str.split(" ")
   
//     console.log(splitString)
//     //return splitString.length

//     const newArry = splitString.filter(
//         function removeSingleChar(a) {
//             return splitString
//         }
//     )
//     //const removeSingleChar = sentence.replace(/ /g, "");
   
// }
const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(countWord(sentence));