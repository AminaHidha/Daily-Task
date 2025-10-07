var differenceOfSums = function(n, m) {
    let notDivisible=[]
    let divisible=[]
    for(i=0;i<=n;i++){
        if(i%m!==0){
          notDivisible.push(i)
        }if(i%m==0){
          divisible.push(i)
        }
        
    }
    let b= notDivisible.reduce((acc,cur)=>acc+cur,0)
    let c= divisible.reduce((acc,cur)=>acc+cur,0)
 
    return b-c;
    
};
console.log(differenceOfSums(5,1));

