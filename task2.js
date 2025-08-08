// 1.

const product=[
    {name:"A",price:200},{name:"B",price:100},
    {name:"c",price:150},{name:"d",price:200},
];
 let pro=product.sort(function(a,b){
     return a.price-b.price;
})
console.log(pro);

const totalPrice = product.reduce((acc, curr) => acc + curr.price, 0);

console.log(totalPrice);

// 2.
 
let num =[2,5,7,8,9,0,3];
let larger=num[0];
for(let number of num){
    if(number>larger){
        larger=number;
    }
}
console.log(larger);












// let number=num[0];
// for(let larg of num){
//     if(larg>number){
//         number=larg;
//     }
// }
// console.log(number);








