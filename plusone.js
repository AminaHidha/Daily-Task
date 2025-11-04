var plusOne = function(digits) {
let str=digits.join('')
let a=(BigInt(str)+1n).toString().split('').map(Number)
return a
};
console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
