let mark=[
    {"a":1,"b":2},
    {"c":3,"d":4},
    {"e":5},
    {"f":6},
]

const[firstobj,...rest]=mark;
console.log(firstobj);
console.log(rest);

// destructure to get c & d

let[,{c,d}, ,]=mark;
console.log(c);
console.log(d);



