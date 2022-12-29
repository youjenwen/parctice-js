// 有一個陣列任意整數在裡面，找出異常值
//全部奇數 找偶數 全部偶數找奇數
// [2, 4, 0, 100, 4, 11, 2602, 36] return 11
//[160, 3, 1719, 19, 11, 13, -21] return 160

//mine
function findOutlier(numbers) {
    let even = [];
    let odd = [];
    numbers.forEach((num) => {
        if (Math.abs(num % 2) === 0) {
            even.push(num)
        } else {
            odd.push(num)
        }
    })
    console.log(even[0], odd[0])
    return (even.length > odd.length) ? odd[0] : even[0]
}
findOutlier([191827882,57605969,12919705,156818429,-116688569,-137012531,185405921,-75915833,-92337895])

//Allen
//執行結果雖然一樣，但是效能不同
//這個方法 一個一個將數字撈出來%2餘數 === 0時存進陣列
//不過當其中一個陣列長度大於1時，就會停止迴圈 表示找到異常值
const findOutlier = (ary) => {
    const oddList = [];
    const evenList = [];
    for (let i = 0; i < ary.length; i++) {
      if (oddList.length > 1 && evenList.length !== 0) {
        return evenList[0];
      }
      if (evenList.length > 1 && oddList.length !== 0) {
        return oddList[0];
      }
      if (ary[i] % 2 === 0) {
        evenList.push(ary[i]);
      } else {
        oddList.push(ary[i]);
      }
    }
  
    return oddList.length > 1 ? evenList[0] : oddList[0];
  };