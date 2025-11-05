var truncateSentence = function(s, k) {
     val1=s.split(' ')
     console.log(val1);  
    val=val1.splice(k,)
    console.log(val);
    
    return val1.join(" ")
  

};
console.log(truncateSentence("Hello how are you Contestant",4));