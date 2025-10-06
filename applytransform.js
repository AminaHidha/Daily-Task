var map = function(arr, fn) {
    const result=[]
    for(i=0;i<arr.length;i++){
        result.push(fn(arr[i],i))
    }
    return result
};

function plusOne(n){
    return n+1
}
const arr1=[1,2,3]
console.log(map(arr1,plusOne));


function plusI(n,i){
    return n+i
}
const arr2=[1,2,3]
console.log(map(arr2,plusI));

function constant(n,i){
    return 42
}
const arr3=[10,20,30]
console.log(map(arr3,constant));
