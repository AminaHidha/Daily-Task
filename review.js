
// // spread operator 

// let arr1=[2,3,4,5];
// let arr2=[6,7,8,9];
// let join=[...arr1,...arr2];
// console.log(join);

// // rest parameter 

// function numbers(...rest){
//     return rest;
// }
// console.log(numbers(2,3,4));

 // closure

// function outer(){

//     let play=1;

// return function inner(){

//    console.log(play);
//    play++;

   
// }

// }
// let a=outer();
// a();
// a();


function twosum(arr,target){
    
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]+arr[i+1]==target){
            return [i,i+1]
        }
    }
}
console.log(twosum([2,11,8,7],9));


