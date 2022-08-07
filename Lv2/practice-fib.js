//費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 ….
// fib(0) = 0
// fib(1) = 1
// for n >=2, fib(n) = fib(n-1) + fib(n-2)
// 現在，請你寫出一個 fib 的函式，回傳位在第 n 個位置的數字
// fib(1) 預期回傳值：1
// fib(2) 預期回傳值：1
// fib(8) 預期回傳值：21

function fib(n) {
    //0 1 1 2 3 5 8 13 21 34
    let sum;
    if (n == 1 || n == 2) {
        sum = 1;
    } else if (n == 0) {
        sum = 0;
    } else {
        sum = fib2(n);
    }
    // console.log(sum);
    return sum;
}
function fib2(m) {
    
    let fib1 = fib(m - 1);
    let fib2 = fib(m - 2);
    let sum2 = fib1 + fib2;
    // console.log(`fib1: ${fib1}, fib2: ${fib2}`);
    // console.log(`sum2: ${sum2}`);
    return sum2;

}
console.log(fib2(7));