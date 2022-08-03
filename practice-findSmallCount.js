//接收一個陣列跟一個數字 n，回傳有多少個數小於 n

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
findSmallCount([1, 2, 3], 2);//1

//方法二
function otherFind(arr,num){
  let result= arr.filter((item)=> item < num );
  // console.log(result);
  result.forEach(element => {
    console.log(element)//1
  });
 
}
otherFind([1, 2, 3], 2);