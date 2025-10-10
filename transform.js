var transformArray = function(nums) {
    let result=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]%2==0){
           result.push(0)
        }else{
            result.push(1)
        }
    }
    
    return result.sort()
};
console.log(transformArray( [4,3,2,1]));
console.log(transformArray( [1,5,1,4,2]));
