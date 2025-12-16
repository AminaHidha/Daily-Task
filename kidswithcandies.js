var kidsWithCandies = function(candies, extraCandies) {
    let result=[]
    let maxcand=Math.max(...candies)    
    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies>= maxcand){
            result.push(true)  
        }else{
            result.push(false)
        }
    }
    return result
};
console.log(kidsWithCandies([2,3,5,1,3], 3));
