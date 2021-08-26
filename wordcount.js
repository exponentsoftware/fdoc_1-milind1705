// function countElm(paragrph, value) {
//     const newArr = paragrph.split(" ");
//    return newArr.reduce((acc, elm) =>{
//       return  (value === elm ? acc +1 : acc)
//     }, 0)
// }

 

// console.log(countElm(paragraph, "I"))

function countWords (str, value1, value2) {
  const newArray = str.split(" ");
 // return newArray.length;
  var wrd1 = [];
  var wrd2 = 0;
  for(let i= 0; i<= newArray.length-1; i++){
    if(value1 === newArray[i]){
      //wrd1.push(newArray[i])
      wrd1 = +1;
      return wrd1 ;
    }

    if(value2 != newArray[i]){
      wrd1 = +1;
    }

  }
  //return wrd2;

}

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.'

console.log(countWords(paragraph, "love", "you"));