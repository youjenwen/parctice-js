function star(n) {
  let result = "";
  for (let i = 0; i <= n; i++) {
    result += "*";
  }
  console.log(result);
}
star(4);

function starReturn(n) {
  let result = "";
  for (let i = 0; i <= n; i++) {
    result += "*";
  }
  return result;
}
console.log(starReturn(6));
