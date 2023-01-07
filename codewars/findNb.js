// n^3+(n−1)^3+(n−2)^3+...+2^3+1^3=m

function findNb(m) {
    let num = 0
    for (let i = 1; i < m; i++) {
        num = num + Math.pow(i, 3)
        // m<=num ? i : -1
        if (num=== m) {
            return i
        }
        if(num > m){
            return -1
        }
    }

}
console.log(findNb(1071225));