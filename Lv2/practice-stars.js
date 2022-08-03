//接收一個參數 n，並且按照規律印出相對應的圖案
// stars(1) 預期輸出：
// *
// stars(3) 預期輸出：
// *
// **
// ***

function stars(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
      result += "*";
      console.log(result)
    }
    // console.log(result);
  }
  stars(6);