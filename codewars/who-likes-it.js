let names = ['Alex', 'Jacob', 'Mark', 'Max'];
// function likes(who) {
//     // console.log(who.length)
//     switch (who.length) {
//         case 0:
//             console.log('no one likes this');
//             break;
//         case 1:
//             console.log(`${who[0]} likes this`);
//             break;
//         case 2:
//             console.log(`${who[0]} and ${who[1]} likes this`);
//             break;
//         case 3:
//             console.log(`${who[0]}, ${who[1]} and ${who[2]} likes this`)
//         default:
//             console.log(`${who[0]}, ${who[1]} and ${who.length - 2} others like this`)
//     }
// }
// likes(['Alex', 'Jacob', 'Mark', 'Max'])

//以上寫法在codewars會錯誤，需改成以下
//網路大神
function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }

//mine
function likes(who) {
    let output = "";
    let num = who.length
    switch (num) {
        case 0:
            return output = 'no one likes this';
        case 1:
            return output = `${who[0]} likes this`;
        case 2:
            return output = `${who[0]} and ${who[1]} like this`;
        case 3:
            return output = `${who[0]}, ${who[1]} and ${who[2]} like this`;
        default:
            return output = `${who[0]}, ${who[1]} and ${num - 2} others like this`;

    }

}

likes(['Alex', 'Jacob', 'Mark', 'Max'])