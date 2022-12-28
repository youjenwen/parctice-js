//取得句子最短的單字

function findWords(string) {
    let arr = string.split(' ')
    let newArr = [];
    arr.forEach((value) => {
        newArr.push(value.split(''))
    })
    newArr.sort((a,b) => a.length - b.length)
    console.log(newArr.shift().length)
    
}
findWords(`Let's travel abroad shall we`);
