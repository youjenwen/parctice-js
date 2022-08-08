//請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。（禁止使用內建函式 sort）
// findMin([1, 2, 5, 6, 99, 4, 5]) 預期回傳值：1
// findMin([1, 6, 0, 33, 44, 88, -10]) 預期回傳值：-10

// let arr = [1, 2, 5, 6, 99, 4, 5];
function findMin(arr) {
    let one = arr[0];
    let findMinArr = arr.filter(ele => ele < one);
    // console.log(findMinArr);
    // console.log(one)
    if ([...findMinArr] == "") {
        return one;
    } else {
        return findMin(findMinArr);
    }
}
console.log(findMin([1, 2, 5, 6, 99, 4, 5]));
console.log(findMin([1, 6, 0, 33, 44, 88, -10]));