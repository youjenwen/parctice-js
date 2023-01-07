//pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]}
//想成它是一個匯率的線，有高有低，輸出兩次高峰值

console.log('a');
// function pickPeaks(arr) {
//     let b = []
//     let c = []
//     let numArr = []
//     let indexArr = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i - 1]) {
//             b.push({
//                 num: arr[i],
//                 index: i
//             })
//         }
//         // console.log(b)

//         if (b.length !== 0 && i > b[b.length - 1].index && arr[i] < b[b.length - 1].num) {
//             // if (!indexArr.includes(b[b.length - 1].index)) {
//             numArr.push(b[b.length - 1].num)
//             indexArr.push(b[b.length - 1].index)
//             // }else{

//             // }

//         }
//     }
//     console.log(b)

//     console.log(numArr, indexArr)
//     // let newNumArr = numArr.filter((element, index, arr) => {
//     //     return arr.indexOf(element) === index;
//     // })

//     // console.log(newNumArr)
//     // let newIndexArr = indexArr.filter((element, index, arr) => {
//     //     return arr.indexOf(element) === index;
//     // })
//     // console.log(newIndexArr)

//     // return { pos: newIndexArr, peaks: newNumArr }
// }
function pickPeaks(arr) {
    let b = []
    let c = []
    let numArr = []
    let indexArr = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1]) {
            b.push({
                num: arr[i],
                index: i
            })
        }

    }
    // console.log(b)
    let d = b.map((value) => {
        return value.index
    })
    // console.log(d)
    let e = d.filter((v, i, a) => {
        return v - 1 === a[i - 1]
    })
    // console.log(e)
    let group = e.map((value) => {
        let arr = b.filter((item) => {
            return item.index === value;
        })
        return arr;
    });
    let newGroup = group.map((value)=>{
        return value[0]
    })
    console.log(newGroup)

}

pickPeaks([2,1,3,2,2,2,2,1])//[1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]