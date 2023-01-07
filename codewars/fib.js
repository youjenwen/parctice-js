//費式數列

// function productFib(prod) {
//     let arr = [0, 1]

//     for (let i = 0; i < prod; i++) {
//         let fib = arr[i] + arr[i + 1]
//         arr.push(fib)
//         if (arr[i] * arr[i + 1] <= prod) {

//             return [arr[i], arr[i + 1], arr[i] * arr[i + 1] === fib ? true : false]
//         }
//         console.log(arr[i] + arr[i + 1])
//     }

// }
// productFib(48)

//0 1 1 2
//[0][1][2][3]

function productFib(prod) {
    let n = 0;
    let n_1 = 1;
    
    while (n * n_1 < prod) {
        n_1 = n + n_1
        n = n_1 - n
        console.log(n_1);
    }

}
productFib(48)