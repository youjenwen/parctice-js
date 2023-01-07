//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


// function moveZeros(arr) {
//     //console.log(arr)
//     let noZero = arr.filter((value) => value !== 0)
//     let zero = arr.filter((value) => value === 0)
//     return noZero.concat(zero)
// }

function moveZeros(arr) {
    let zeroArr = [];
    let noZeroArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 0 ? zeroArr.push(arr[i]) : noZeroArr.push(arr[i])
    }
    return noZeroArr.concat(zeroArr)
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])

var moveZeros = function (arr) {
    return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
}