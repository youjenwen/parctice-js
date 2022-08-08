//請寫出一個函式 stars2，接收一個參數 n，並依照規律印出圖形
// stars2(1) 預期輸出：
// *
// stars2(3) 預期輸出：
// *
// **
// ***
// **
// *

function stars2(n) {
    let arrStar = [];
    let star = "";
    for (let i = 1; i <= n; i++) {
        star += "*";
        arrStar.push(star);
        console.log(star)
    }
    // console.log(arrStar);
    let reverseStar = arrStar.reverse();
    for (let j = 1; j < reverseStar.length; j++) {
        console.log(reverseStar[j]);
    }

}
stars2(3);