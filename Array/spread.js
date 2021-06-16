const middle = [5,6]

const array = [0,1,2,3,4,...middle]

console.log(array)

var arr = ['a', 'b', 'c'];
var arr2 = ['d', 'e', 'f'];
arr = [...arr, ...arr2];
console.log(arr);

var arr = [2, 4, 8, 6, 0];
var max = Math.max(...arr);
console.log(max);


var str = "hello";
var chars = [...str];
console.log(chars); 