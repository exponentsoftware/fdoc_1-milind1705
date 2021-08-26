// function sevenRandomNumber(){
//     const seven = 10* Math.random();
//     const float = Math.floor(seven)
//     const arr = [];
//     arr.push(float)

//     return arr
// }

function genrateRandomNumber(min, max) {
    let step1 = max - min +1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
//console.log(sevenRandomNumber())

function arrayOfNumber(start, end){
    const myArr = [];
    if(7 >= myArr.length ){
        for(let i=start; i<=end; i++){
            myArr.push(i)
        }
    }
    return myArr;
} 
console.log(arrayOfNumber(0, 9));
