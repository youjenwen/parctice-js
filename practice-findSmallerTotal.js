//接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和

let arr = [7, 8, 9, 10, 11];
let num = 10;

function otherFind(arr, num) {
  let result = arr.filter((item) => item < num);
  // console.log(result);
  let sum = 0;
  result.forEach(ele => {
    sum += ele;
  });
  console.log(sum)

}
otherFind([3, 2, 5, 8, 7], 0);//0
otherFind([3, 2, 5, 8, 7], 999)//25