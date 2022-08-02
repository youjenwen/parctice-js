let str = "bbCd";
let strSplit = str.split("");
// console.log(strSplit);
// strSplit.find(function (val, index) {
//   if (val == val.toUpperCase()) {
//     // return val;
//     return console.log("val: " + val + " index: " + index);
//   }
  
// });
// console.log(value);
let word = strSplit.find((val) => val == val.toUpperCase())
// console.log(word);

function findUpper(str){
    let strSplit = str.split("");
    // console.log(strSplit);//[ 'b', 'b', 'c', 'F' ]
    let value = strSplit.find((val) => val == val.toUpperCase());
    let index = strSplit.findIndex((val) => val == val.toUpperCase());
    if(index !== -1){
        console.log(value, index);
    }else{
        console.log(-1);
    }

}
findUpper("bbcrG");