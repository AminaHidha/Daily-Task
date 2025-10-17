var isSameTree = function(p, q) {
 if(p.length!==q.length){
    return false
 }
 return p.every((val,index)=>val===q[index])
};

console.log(isSameTree([1,2,3],[1,2,3]));
console.log(isSameTree([1,2],[1,null,2]));  
console.log(isSameTree([1,2,1],[1,1,2]));  