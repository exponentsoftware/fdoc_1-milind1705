function checkUnique(arr){
    const newArr = [];
    for (let i=0; i<= arr.length-1; i++ ){
        if(newArr.indexOf(arr[i])=== -1){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

const array = [2,4,5,6,7,4,2,2,7,8]

console.log(checkUnique(array));