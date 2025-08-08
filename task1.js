const order =[200,450,130,50,1000,20];
order.sort(function(a,b){
    return a-b;
});
console.log(order);

const each=[200,450,130,50,1000,20];
 each.forEach(function(log){
console.log(log);
});

let fill=[200,450,130,50,1000,20];
let just=fill.filter(function(a){
    return a>100;
});
console.log(just);

const maap=[200,450,130,50,1000,20];
let discount=maap.map(function(dis){
    return dis-10;
});
console.log(discount);

const sum= [ 190, 440, 120, 40, 990, 10 ]
let summ=sum.reduce(function(a,b){
    return a+b;
},0);
console.log(summ);



