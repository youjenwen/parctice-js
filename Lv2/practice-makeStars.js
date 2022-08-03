//接收一個參數 n，並且根據規律「回傳」字串
// makeStars(1) 正確回傳值：*
// makeStars(2) 正確回傳值：*\n**
// makeStars(5) 正確回傳值：*\n**\n***\n****\n*****

function makeStars(n){
    let result = '';
    let arrResult = [];
    for(let i = 1; i <= n ;i++){
        result += "*";
        arrResult.push(result)
    }
    // console.log(arrResult)
    
    let str = arrResult.join("\\n");//要兩個\\才會顯示一個\
    console.log(str)
}
makeStars(3)