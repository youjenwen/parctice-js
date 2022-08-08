//請寫出一個函式 reverse，接收一個字串，並且回傳反轉過後的字串。（禁止使用內建函式 reverse）
// reverse("abcd") 預期回傳值：dcba
// reverse("12345aa") 預期回傳值：aa54321

function reverse(str) {
    let arr = [...str];
    // console.log(arr); 
    let i = arr.length;
    let arrRerverStr = "";
    for (; 0 < i; i--) {
        // console.log(arr[i-1]);//因為會從arr[4]開始，但undefined
        arrRerverStr += arr[i - 1];
    }
    console.log(arrRerverStr);
}
reverse("abcd");
reverse("12345aaa");