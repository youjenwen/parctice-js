let arr = [1, 2, 3, 4];
let num = 1;
// let smallCount = arr.find((item) => item > num);
// console.log(smallCount)

function findSmallCount(arr,num) {
//   let num = 4;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      result.push(arr[i]);
    }
  }
   console.log(result.length);
}
// console.log(find([3, 4, 5, 6],4).length); //得到數量
findSmallCount([1, 2, 3, 4, 5], 0);
findSmallCount([1, 2, 3], 2);