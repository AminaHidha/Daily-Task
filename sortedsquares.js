var sortedSquares = function(nums) {
    let square=nums.map(numb=>numb*numb,0)
    let sort=square.sort((a,b)=>a-b) 
    return sort
 }

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));

