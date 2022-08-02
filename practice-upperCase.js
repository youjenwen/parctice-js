let str = "Abcde";
let resultSplit = str.split("");
// console.log(resultSplit);
// console.log(str.toUpperCase());
let strToupper = str.toUpperCase();
let resultToupperSplit = strToupper.split("");
// console.log(resultToupperSplit);
if(resultSplit[0] == resultToupperSplit [0]){
    // console.log("符合");
}else{
    // console.log("不符合");
}
//利用split字串轉陣列
function isUpperCase(str){
    let strSplit = str.split("");
    let strUpper = str.toUpperCase();
    let strUpperSplit = strUpper.split("");
    if(strSplit[0] === strUpperSplit[0]){
        return true;
    }else{
        return false;
    }
}
console.log(isUpperCase("abcd"));
console.log(isUpperCase("Abcd"));