let abc = 123;

let  a = Math.trunc(abc / 100);
let  c = abc % 10;
let  b = ((abc % 100) - c) / 10;

let res = a > 0 && b > 0 && c > 0;

console.log(res)