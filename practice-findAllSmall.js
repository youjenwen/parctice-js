//接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）

// findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]
// findAllSmall([1, 2, 3], 2) 正確回傳值：[1]
// findAllSmall([1, 3, 5, 4, 2], 4) 正確回傳值：[1, 3, 2]
let arr = [1,2,3]
let num = 10;
function findAllSmall(arr,num){
    let findSmall = arr.filter((item)=> item < num);
    console.log(findSmall)
}
findAllSmall(arr,num)//[1,2,3]
findAllSmall([1, 2, 3], 2)//[1]
findAllSmall([1, 3, 5, 4, 2], 4)//[ 1, 3, 2 ]
