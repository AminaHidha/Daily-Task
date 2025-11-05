var runningSum = function(nums) {
    let arr=[]
    let sum=0
    for(let i=0;i<nums.length;i++){
        val=sum+=nums[i]
        arr.push(val)
    }
    return arr
    
};
console.log(runningSum([1,2,3,4]));
