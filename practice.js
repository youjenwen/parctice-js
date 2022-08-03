let array = [
  { name: "Jack", age: 30 },
  { name: "Jason", age: 32 },
  { name: "Emily", age: 28 },
  { name: "Irving", age: 23 },
  { name: "Lena", age: 28 },
  { name: "Bob", age: 30 },
  { name: "Anna", age: 28 },
];

// const arr = [
//   { name: "alex", value: 10 },
//   { name: "alex", value: 20 },
//   { name: "tom", value: 30 },
//   { name: "tom", value: 40 },
// ];
//   const result = arr.filter(item => !set.has(item.name) ? set.add(item.name) : false);

// let set = new Set();
// let result = arr.filter(function(item){
//     if(!set.has(item.name)){
//         return set.add(item.name);
//     }else{
//         return false;
//     }
// })
// console.log(result);
//找第一個相同重複的age
// let setArray = new Set();
// let resultArray = array.filter(function (item) {
//   if (!setArray.has(item.age)) {
//     return setArray.add(item.age);
//   } else {
//     return false;
//   }
// });
// console.log(resultArray);
let resultMap = array.map((item) => item.age);
let resultMax = Math.max(...resultMap); //32
let resultMin = Math.min(...resultMap); //23
let result = [];
let resultA = [];
let resultB = [];
let resultC = [];
array.filter(function (item) {
  if (item.age == resultMin) {
    resultA.push(item);
  }
  if (item.age == resultMax) {
    resultB.push(item);
  }
  if (item.age != resultMin && item.age != resultMax) {
    resultC.push(item);
  }
});
result.push(resultA);
result.push(resultB);
// console.log(result);

let resultD = [];
let resultE = [];
let resultCMap = resultC.map((item) => item.age);
// console.log(resultCMap);
let resultCMax = Math.max(...resultCMap); //
let resultCMin = Math.min(...resultCMap); //
resultC.filter(function (item) {
  if (item.age == resultCMin) {
    resultD.push(item);
  }
  if (item.age == resultCMax) {
    resultE.push(item);
  }
});
result.push(resultD);
result.push(resultE);
console.log(result);

// [
//   [{ name: "Irving", age: 23 }],
//   [{ name: "Jason", age: 32 }],
//   [
//     { name: "Emily", age: 28 },
//     { name: "Lena", age: 28 },
//     { name: "Anna", age: 28 },
//   ],
//   [
//     { name: "Jack", age: 30 },
//     { name: "Bob", age: 30 },
//   ],
// ];

array.forEach(function (item) {
  // console.log(item)
});
let firstArr = 0;
let arrayMax = array.filter(function(item,index,arr){
  //  console.log(arr[0].age)
  firstArr = arr[0].age;
  if(firstArr < item.age){
    console.log(item.age);
    
    
    return firstArr = item.age;
  }
})
console.log(firstArr);

