function reverseArray(arr){
const newArr = [];

for(let i= arr.length-1; i >=0; i--){
    newArr.push(arr[i])
}
return newArr;
}

const array = ["a","b","c"]

console.log(reverseArray(array))