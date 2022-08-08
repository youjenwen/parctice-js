//請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串
// swap("Peter") 預期回傳值：pETER
// swap("AbCdE") 預期回傳值：aBcDe

function swap(str) {
    let arr = [...str];
    //  console.log(arr)
    let arrCase = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i].toUpperCase()){
            let lower = arr[i].toLowerCase();
            arrCase.push(lower);
        }
        else{
            let upper = arr[i].toUpperCase();
            arrCase.push(upper);
        }
    }
    let strCase = arrCase.join("");
    console.log(strCase);

}
swap("Peter");
swap("AbCdE");