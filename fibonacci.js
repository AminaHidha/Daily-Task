var fibGenerator = function*() {
    let a=0,b=1
    while(true){
        yield a;
        [a,b]=[b,a+b]
    }
};

const gen1=fibGenerator()
let result1=[]
for(let i=0;i<5;i++){
    result1.push(gen1.next().value)
}
console.log(result1);

const gen2=fibGenerator()
let result2=[]
console.log(result2);

