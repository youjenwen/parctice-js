
//mine
function pattern(n) {
    var output = "";
    let start = '';
    let startsArr = ['1\n'];
    if (n > 1) {
        for (let i = 1; i <= n - 1; i++) {
            start += '*';
            if (i < n - 1) {
                startsArr.push(1 + start + (i + 1) + '\n')
            }
            else {
                startsArr.push(1 + start + (i + 1))
            }
        }
    }

    startsArr.forEach((value) => {
        output += value
    })
    // return output;
    console.log(output)
}
pattern(7)

//網路強者(best practice)
function pattern(n) {
    if (n < 1) return "";
    var output = "1";
    for (let i = 2; i <= n; ++i) {
        output += "\n1" + Array(i).join("*") + i;
    }
    return output;
}