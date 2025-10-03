var compose = function(functions) {
     
    return function(x) {
        return(functions.reduceRight((acc,fn)=>fn(acc),x))
    }
};


const function1=[
    x=>x+1,
    x=>x*x,
    x=>2*x
]

const fn1=compose(function1)
console.log(fn1(4));


const function2=[
    x=>10*x,
    x=>10*x,
    x=>10*x,
]

const fn2=compose(function2)
console.log(fn2(1));


const function3=[]
const fn3=compose(function3)
console.log(fn3(42));


