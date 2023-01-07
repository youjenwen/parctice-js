//結構一致 字數一樣 跟春聯一樣(?)
// AA-> BB true,AB -> CC false

//目前要看得好像是比對順序位置

function isomorph(a, b) {
    if (a.length !== b.length) {
        return false
    }
    let array_a = a.split('')
    let array_b = b.split('')

    let saveObj = {}
    let trueArray = []
    for (let i = 0; i < array_a.length; i++) {
        if (!saveObj.hasOwnProperty(array_a[i])) {
            if(!Object.values(saveObj).find(value => value === array_b[i])){
                saveObj[array_a[i]] = array_b[i] //一定要這樣寫?
            }
            else{
                return false
            }
        } else {
            if (saveObj[array_a[i]] !== array_b[i]) return false
            if(saveObj[array_a[i]]=== array_b[i]){
                trueArray.push(true)
            }
        }
    }
    if (Object.keys(saveObj).length === 1) {
        return true
    }
    let count = Object.keys(saveObj).length + trueArray.length
    if(count === array_a.length){
        return true
    }
    console.log(saveObj)




}
isomorph("ESTATE", "DUELED")
//"ESTATE", "DUELED"
//"XXX", "YYY"

function otherIsomorph(a,b){
    let aI =  a.split('').map((e,i)=>{
        return a.indexOf(e)
      });
      let bI  =  b.split('').map((e,i)=>{
        return b.indexOf(e)
      });
      return (aI+'' == bI+'') ? true : false
}
otherIsomorph("ESTATE", "DUELED")