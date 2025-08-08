const item=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<item.length;i++){
    if (item[i]%3!==0){
        console.log(item[i]);
    }
}


let num=[2,3,4,7,9,2,7,3,8];
let unique=num.filter(function(take){
    return num.indexOf(take)==num.lastIndexOf(take);
})
console.log(unique);