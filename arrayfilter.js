
function filter(arr,fn){
    const result=[]

    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            result.push(arr[i])
        }

    }
    return result
}
console.log(filter([10,20,30,40],n=>n>10));
console.log(filter([-2, -1, 0, 1, 2], n => n + 1)); 
console.log(filter([1, 2, 3], (n, i) => i === 0)); 



