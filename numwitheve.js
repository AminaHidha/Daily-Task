var findNumbers = function(nums) {
    let length=nums.map(num=>num.toString().length)
    count=0
    for(i=0;i<=length.length;i++){
        if(length[i]%2==0){
            count++
        }
       
    }
     return count
  
};
console.log(findNumbers([12,345,2,6,7896]));
console.log(findNumbers([555,901,482,1771]));
