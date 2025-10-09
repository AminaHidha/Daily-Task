var subtractProductAndSum = function(n) {
    let str=n.toString().split('')
    let arg=str.map(Number)
   let mul= arg.reduce((acc,cur)=>acc*cur,1)
   let sum=arg.reduce((a,b)=>a+b,0)
   return mul-sum
   };
console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
