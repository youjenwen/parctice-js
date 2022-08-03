//接收一個陣列並回傳陣列中數字的總和

// sum([1, 2, 3]) 預期回傳值：6
// sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0

function sum(arr){
    let result = 0;
    arr.forEach(element => {
        result += element;
    });
    console.log(result);
}
sum([1,2,3]);//6
sum([-1, 1, 2, -2, 3, -3]);//0