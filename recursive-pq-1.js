var arrayOfArrays = [[1,2],[3,4,5,6,7],[8, [9, 10],[[11,12],[13, 14, 15], 16]]];
var count = 0;

function countArrayItems(arr){
    if(!Array.isArray(arr)){
        count++;
    } else {
    for(var i = 0; i < arr.length; i++){
        countArrayItems(arr[i]);
    }
    }
    return count;
}

console.log(countArrayItems(arrayOfArrays));